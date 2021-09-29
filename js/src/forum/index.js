import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionHero from 'flarum/forum/components/DiscussionHero';

app.initializers.add('justoverclock/igdb-api', () => {
    extend(DiscussionHero.prototype, 'oncreate', function () {
        const discGameTitle = this.attrs.discussion.title().split(/\s+/).join('-');
        const isLoggedIn = app.session.user;
        let controller = new AbortController();
        let signal = controller.signal;

        if (isLoggedIn) {
            const GameApi = fetch('https://api.rawg.io/api/games/' + discGameTitle + '?page_size=1&page=1&key=75a9ffdcf8624e1896ead6e467b985e8', {signal})
                .then((response) => response.json())
                .then((data) => {
                    this.gameDet = data;
                    console.log(data);
                    m.redraw();
                });
        }
    });
    extend(DiscussionHero.prototype, 'items', function (items) {
        if (typeof this.gameDet === 'undefined') return;

        const score = 'width:' + this.gameDet.metacritic + '%';
        
        if (this.gameDet.description_raw === undefined) {
            return ;
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
                                            <div class="img-square-wrapper">
                                                <img class="gamePoster" src={this.gameDet.background_image} />
                                                <div class="metaScore">MetaCritic Score: {this.gameDet.metacritic}</div>
                                                <div class="meter green nostripes">
                                                    <span id="progresscore" style={score} />
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <h1 class="card-title">{this.gameDet.name}</h1>
                                                <h4 class="gamesubtitle">
                                                    Publisher: {this.gameDet.developers[0].name} - Genres: {this.gameDet.genres[0].name},{' '}
                                                    {this.gameDet.genres[1].name}{' '}
                                                </h4>
                                                <p class="card-text">{this.gameDet.description_raw}</p>
                                                <p class="linktometac">
                                                    <i class="fas fa-link metacr"></i>
                                                    <a href={this.gameDet.metacritic_url}>See on MetaCritic</a>
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
