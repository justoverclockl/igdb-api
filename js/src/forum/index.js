import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionHero from 'flarum/forum/components/DiscussionHero';
import LinkButton from 'flarum/components/LinkButton';
import upcomingGames from './components/upcomingGames';
import IndexPage from 'flarum/forum/components/IndexPage';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';

app.initializers.add('justoverclock/igdb-api', () => {
    app.routes.upcomingGames = {
        path: '/games',
        component: upcomingGames,
    };
    extend(DiscussionComposer.prototype, 'headerItems', function (items) {
        if (app.forum.attribute('justoverclock-igdb-api.composerAlert') === true) {
            items.add(
                'gameAlertBox',
                <div className="Alert gameAlert">
                    <div className="Alert-body gameAlertBody">
                        <h4>{app.translator.trans('justoverclock-igdb-api.forum.game-title-alert-box')}</h4>
                        <p>{app.translator.trans('justoverclock-igdb-api.forum.game-title-alert-box-description')}</p>
                    </div>
                </div>
            );
        }
    });
    extend(IndexPage.prototype, 'navItems', (navItems) => {
        navItems.add(
            'upcomingGames',
            <LinkButton href={app.route('upcomingGames')} icon="fas fa-gamepad">
                {app.translator.trans('justoverclock-igdb-api.forum.gamesPage')}
            </LinkButton>,
            100
        );

        return navItems;
    });
    extend(DiscussionHero.prototype, 'oncreate', function () {
        const RawgKey = app.forum.attribute('justoverclock-igdb-api.RawgApiKey');
        const discGameTitle = this.attrs.discussion.title().split(/\s+/).join('-');
        const isLoggedIn = app.session.user;

        // gestiamo gli errori nella risposta
        function handleErrors(response) {
            if (response.ok === false) {
                throw Error(response.statusText);
            }
            return response;
        }
        // per evitare troppe richieste all'api, effettuiamo fetch solo per chi è registrato
        if (isLoggedIn) {
            const GameApi = fetch('https://api.rawg.io/api/games/' + discGameTitle + '?page_size=1&page=1&key=' + RawgKey)
                .then(handleErrors)
                .then((response) => response.json())
                .then((data) => {
                    this.gameDet = data;
                    console.log(data);
                    m.redraw();
                })
                .catch((error) => console.log('This Game title does not exist ;) =>', discGameTitle));
        }
    });
    extend(DiscussionHero.prototype, 'items', function (items) {
        if (typeof this.gameDet === 'undefined') return;

        // css per la barra punteggi e l'immagine di background
        let score = 'width:' + this.gameDet.metacritic + '%';
        let bgGame = 'background-image:url(' + this.gameDet.background_image + ');';

        if (this.gameDet.metacritic === null) {
            this.gameDet.metacritic = 0;
            score = 'width:0%';
        }
        // non mostriamo l'html se non c'è nulla da mostrare
        if (this.gameDet.description_raw === undefined) {
            return;
        } else {
            items.remove('title');
            items.add(
                'gameDetails',
                <div className="gameWrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-3">
                                <div className="card">
                                    <div className="card-horizontal">
                                        <div className="img-square-wrapper" style={bgGame}>
                                            <div className="metaScore">
                                                {app.translator.trans('justoverclock-igdb-api.forum.metacriticScore')}: {this.gameDet.metacritic}
                                            </div>
                                            <div className="meter green nostripes">
                                                <span id="progresscore" style={score} />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h1 className="card-title">{this.gameDet.name}</h1>
                                            <h4 className="gamesubtitle">
                                                {app.translator.trans('justoverclock-igdb-api.forum.publisher')}: {this.gameDet.developers[0].name} -{' '}
                                                {app.translator.trans('justoverclock-igdb-api.forum.genres')}: {this.gameDet.genres[0].name}
                                            </h4>
                                            <p className="card-text" id="google_translate_element" translate="yes">
                                                {this.gameDet.description_raw}
                                            </p>
                                            <p className="linktometac">
                                                <i className="fas fa-link metacr" />
                                                <a
                                                    href={this.gameDet.metacritic_url}
                                                    target="_blank"
                                                    rel="nofollow"
                                                    title={this.gameDet.metacritic_url}
                                                >
                                                    {app.translator.trans('justoverclock-igdb-api.forum.seeOnMetaCritic')}
                                                </a>
                                                <i className="fas fa-globe-europe offweb" />
                                                <a href={this.gameDet.website} target="_blank" rel="nofollow" title={this.gameDet.website}>
                                                    {app.translator.trans('justoverclock-igdb-api.forum.offwebsite')}
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="userRatings">
                        <li className="listofRatings">
                            <i className="fas fa-circle excellent" />
                            Exceptional ({this.gameDet.ratings[1].count})
                        </li>
                        <li className="listofRatings">
                            <i className="fas fa-circle recommended" />
                            Recommended ({this.gameDet.ratings[0].count})
                        </li>
                        <li className="listofRatings">
                            <i className="fas fa-circle meh" />
                            Meh ({this.gameDet.ratings[2].count})
                        </li>
                        <li className="listofRatings">
                            <i className="fas fa-circle skip" />
                            Skip ({this.gameDet.ratings[3].count})
                        </li>
                    </div>
                </div>
            );
        }
    });
});
