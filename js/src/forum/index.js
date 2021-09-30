import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionHero from 'flarum/forum/components/DiscussionHero';

app.initializers.add('justoverclock/igdb-api', () => {
    extend(DiscussionHero.prototype, 'oncreate', function () {
        const discGameTitle = this.attrs.discussion.title().split(/\s+/).join('-');
        const isLoggedIn = app.session.user;

        // gestiamo gli errori nella risposta
        function handleErrors(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }
        // per evitare troppe richieste all'api, effettuiamo fetch solo per chi è registrato
        if (isLoggedIn) {
            const GameApi = fetch('https://api.rawg.io/api/games/' + discGameTitle + '?page_size=1&page=1&key=75a9ffdcf8624e1896ead6e467b985e8')
                .then(handleErrors)
                .then((response) => response.json())
                .then((data) => {
                    this.gameDet = data;
                    console.log(data);
                    m.redraw();
                })
                .catch((error) => console.log('This Game title does not exist =>', discGameTitle));
        }
    });
    extend(DiscussionHero.prototype, 'items', function (items) {
        if (typeof this.gameDet === 'undefined') return;

        // css per la barra punteggi e l'immagine di background
        const score = 'width:' + this.gameDet.metacritic + '%';
        const bgGame = 'background-image:url(' + this.gameDet.background_image + ');';

        // non mostriamo l'html se non c'è nulla da mostrare
        if (this.gameDet.description_raw === undefined) {
            return;
        } else {
            items.add(
                'gameDetails',
                <div className="myclass">
                    <div class="gameWrapper">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12 mt-3">
                                    <div class="card">
                                        <div class="card-horizontal">
                                            <div class="img-square-wrapper" style={bgGame}>
                                                <div class="metaScore">
                                                  {app.translator.trans('justoverclock-igdb-api.forum.metacriticScore')}: {this.gameDet.metacritic}</div>
                                                <div class="meter green nostripes">
                                                    <span id="progresscore" style={score} />
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <h1 class="card-title">{this.gameDet.name}</h1>
                                                <h4 class="gamesubtitle">
                                                    {app.translator.trans('justoverclock-igdb-api.forum.publisher')}:{' '}
                                                    {this.gameDet.developers[0].name} -{app.translator.trans('justoverclock-igdb-api.forum.genres')}:{' '}
                                                    {this.gameDet.genres[0].name}, {this.gameDet.genres[1].name}{' '}
                                                </h4>
                                                <p class="card-text">{this.gameDet.description_raw}</p>
                                                <p class="linktometac">
                                                    <i class="fas fa-link metacr" />
                                                    <a href={this.gameDet.metacritic_url} target="_blank" rel="nofollow">
                                                        {app.translator.trans('justoverclock-igdb-api.forum.seeOnMetaCritic')}
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    });
});
