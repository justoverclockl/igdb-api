import app from 'flarum/forum/app';
import Page from 'flarum/components/Page';
import IndexPage from "flarum/forum/components/IndexPage";
import listItems from 'flarum/common/helpers/listItems';


export default class upcomingGames extends Page {
  oncreate(vnode) {
    super.oncreate(vnode);
    app.setTitle(app.translator.trans('justoverclock-igdb-api.forum.pagetitle'));
    app.setTitleCount(0);

    const RawgKeyPage = app.forum.attribute('justoverclock-igdb-api.RawgApiKey');
    const div = document.getElementById('showGamesList');
    const convertToTwoDigits = (digit) => { // ex) "2020/8/9" => "2020/08/09"
      if (digit.toString().length < 2) {
        digit = '0' + digit.toString()
      }
      return digit
    }
    const date = new Date();
    const year = date.getFullYear()
    const month = convertToTwoDigits(date.getMonth() + 1) // getMonth() returns previous month
    const day = convertToTwoDigits(date.getDate())
    const today = year + '-' + month + '-' + day
    const nextYear = year + 1 + '-' + month + '-' + day;
    const url = `https://api.rawg.io/api/games?dates=${today},${nextYear}&ordering=-added&page_size=12&key=`+ RawgKeyPage

    const handleResponse = (response) => {
      return response.json()
        .then(function (json) {
          if (response.ok) {
            return json;
          } else {
            return Promise.reject(response);
          }
        })
    }

    fetch(url)
      .then(handleResponse)
      .then(function (data) {

        data.results.map((game) => {

          const card = document.createElement('div');
          card.setAttribute('class','cardupGames');
          const title = document.createElement('h2');
          title.setAttribute('class', 'mainGameTitle');
          title.textContent = game.name;
          card.appendChild(title);

          if (game.background_image) {
            const image = document.createElement('img');
            image.setAttribute('class', 'imgGame')
            image.src = game.background_image;
            card.appendChild(image);
          }

          if (game.released) {
            let released = game.released;
            released = released.split('-');
            released.push(released.shift());
            released = released.join('/');
            const releaseDate = document.createElement('h4');
            releaseDate.setAttribute('class', 'relDate')
            releaseDate.innerText = 'Release date: ' + released;
            card.appendChild(releaseDate);
          }

          if (game.platforms) {
            const gamePlat = document.createElement('p');
            gamePlat.setAttribute('class', 'gamePlat')
            const platformText = document.createTextNode('Available on: ');
            gamePlat.appendChild(platformText);
            let platformList = game.platforms.map(a => a.platform.name).join(", ");
            let platforms = document.createTextNode(platformList);
            gamePlat.appendChild(platforms);
            card.appendChild(gamePlat);
          }

          const gameGenre = document.createElement('p');
          gameGenre.setAttribute('class', 'Genre');
          const genreText = document.createTextNode('Genres: ');
          gameGenre.appendChild(genreText);
          let genreList = game.genres.map(a => a.name).join(", ");
          let genres = document.createTextNode(genreList);
          gameGenre.appendChild(genres);
          card.appendChild(gameGenre);

          if (game.clip) {
            const vid = document.createElement('video');
            vid.controls = true;
            vid.setAttribute('width', '100%');
            vid.setAttribute('height', 'auto');
            vid.load();
            const vidSrc = document.createElement('source');
            vidSrc.src = game.clip.clip;
            vid.appendChild(vidSrc);
            card.appendChild(vid);
          } else {
            const noClip = document.createElement('p');
            noClip.setAttribute('class', 'nomoreInfo');
            const infoSoonText = document.createTextNode('More information coming soon.');
            noClip.appendChild(infoSoonText)
            card.appendChild(noClip)
          }

          div.appendChild(card);
        })
      })
      .catch(function (error) {
        console.log('error', error);
        const card = document.createElement('div');
        card.style.textAlign = 'center';
        card.style.margin = '0 auto'
        card.innerHTML = 'Oops! The videogame database is currently unresponsive. Please check back at a later time.'
        div.appendChild(card);
      })

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
            <div className="containerGames" id="showGamesList">
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
