import app from 'flarum/forum/app';
import Page from 'flarum/components/Page';
import IndexPage from 'flarum/forum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';

export default class upcomingGames extends Page {
    oncreate(vnode) {
        super.oncreate(vnode);
        app.setTitle(app.translator.trans('justoverclock-igdb-api.forum.pagetitle'));
        app.setTitleCount(0);

        const RawgKeyPage = app.forum.attribute('justoverclock-igdb-api.RawgApiKey');
        const div = document.getElementById('showGamesList');
        const convertToTwoDigits = (digit) => {
            if (digit.toString().length < 2) {
                digit = '0' + digit.toString();
            }
            return digit;
        };
        const date = new Date();
        const year = date.getFullYear();
        const month = convertToTwoDigits(date.getMonth() + 1); // getMonth() returns previous month
        const day = convertToTwoDigits(date.getDate());
        const today = year + '-' + month + '-' + day;
        const nextYear = year + 1 + '-' + month + '-' + day;
        const url = `https://api.rawg.io/api/games?dates=${today},${nextYear}&ordering=-added&page_size=12&key=` + RawgKeyPage;

        const handleResponse = (response) => {
            return response.json().then(function (json) {
                if (response.ok) {
                    return json;
                } else {
                    return Promise.reject(response);
                }
            });
        };

        fetch(url)
            .then(handleResponse)
            .then(function (data) {
              m.redraw();
                data.results.map((game) => {
                    const LinkMe = 'https://rawg.io/games/' + game.slug;

                    const card = document.createElement('div');
                    card.setAttribute('class', 'cardupGames');
                    const title = document.createElement('h2');
                    title.setAttribute('class', 'mainGameTitle');
                    title.setAttribute('title', game.name)
                    title.textContent = game.name;
                    card.appendChild(title);

                    if (game.background_image) {
                        const image = document.createElement('img');
                        image.setAttribute('class', 'imgGame');
                        image.setAttribute('alt', game.name );
                        image.setAttribute('title', game.name );
                        image.src = game.background_image;
                        card.appendChild(image);
                    }

                    if (game.released) {
                        let released = game.released;
                        released = released.split('-');
                        released.push(released.shift());
                        released = released.join('/');
                        const releaseDate = document.createElement('h4');
                        releaseDate.setAttribute('class', 'relDate');
                        releaseDate.innerText = app.translator.trans('justoverclock-igdb-api.forum.relDatePage') + ':' + released;
                        card.appendChild(releaseDate);
                    }

                    if (game.clip) {
                        const vid = document.createElement('video');
                        vid.controls = true;
                        vid.setAttribute('width', '100%');
                        vid.setAttribute('height', '135px');
                        vid.load();
                        const vidSrc = document.createElement('source');
                        vidSrc.src = game.clip.clip;
                        vid.appendChild(vidSrc);
                        card.appendChild(vid);
                    }

                    div.appendChild(card);
                });
            })
            .catch(function (error) {
                console.log('error', error);
                const card = document.createElement('div');
                card.style.textAlign = 'center';
                card.style.margin = '0 auto';
                card.innerHTML = app.translator.trans('justoverclock-igdb-api.forum.noConnection');
                div.appendChild(card);
            });
    }

    view() {
        return (
            <div className="gamesPage">
                {IndexPage.prototype.hero()}
                <div className="container">
                    <div className="sideNavContainer">
                        <nav className="nav IndexPage-nav sideNav">
                            <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
                        </nav>
                        <div className="content sideNavOffset">
                          <h1 class="gamePageTitle">{app.translator.trans('justoverclock-igdb-api.forum.pageTitle')}</h1>
                            <div className="containerGames" id="showGamesList"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
