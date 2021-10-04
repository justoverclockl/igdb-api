module.exports=function(e){var t={};function a(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=9)}([function(e,t){e.exports=flarum.core.compat["forum/app"]},,function(e,t){e.exports=flarum.core.compat["forum/components/IndexPage"]},function(e,t){e.exports=flarum.core.compat["common/extend"]},function(e,t){e.exports=flarum.core.compat["forum/components/DiscussionHero"]},function(e,t){e.exports=flarum.core.compat["components/LinkButton"]},function(e,t){e.exports=flarum.core.compat["components/Page"]},function(e,t){e.exports=flarum.core.compat["common/helpers/listItems"]},function(e,t){e.exports=flarum.core.compat["forum/components/DiscussionComposer"]},function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),i=a(3),n=a(4),s=a.n(n),c=a(5),l=a.n(c);function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=a(6),d=a.n(p),g=a(2),f=a.n(g),h=a(7),v=a.n(h),b=function(e){var t,a;function r(){return e.apply(this,arguments)||this}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,u(t,a);var i=r.prototype;return i.oncreate=function(t){e.prototype.oncreate.call(this,t),o.a.setTitle(o.a.translator.trans("justoverclock-igdb-api.forum.pagetitle")),o.a.setTitleCount(0);var a=o.a.forum.attribute("justoverclock-igdb-api.RawgApiKey"),r=document.getElementById("showGamesList"),i=function(e){return e.toString().length<2&&(e="0"+e.toString()),e},n=new Date,s=n.getFullYear(),c=i(n.getMonth()+1),l=i(n.getDate());fetch("https://api.rawg.io/api/games?dates="+(s+"-"+c+"-"+l)+","+(s+1+"-"+c+"-"+l)+"&ordering=-added&page_size=12&key="+a).then((function(e){return e.json().then((function(t){return e.ok?t:Promise.reject(e)}))})).then((function(e){m.redraw(),e.results.map((function(e){var t="https://rawg.io/games/"+e.slug,a=document.createElement("div");a.setAttribute("class","cardupGames");var i=document.createElement("h2");if(i.setAttribute("class","mainGameTitle"),i.setAttribute("title",e.name),i.textContent=e.name,a.appendChild(i),e.background_image){var n=document.createElement("img");n.setAttribute("class","imgGame"),n.setAttribute("alt",e.name),n.setAttribute("title",e.name),n.src=e.background_image,n.addEventListener("click",(function(){return window.open(t)})),n.setAttribute("style","cursor: pointer;"),a.appendChild(n)}if(e.released){var s=e.released;(s=s.split("-")).push(s.shift()),s=s.join("/");var c=document.createElement("h4");c.setAttribute("class","relDate"),c.innerText=o.a.translator.trans("justoverclock-igdb-api.forum.relDatePage")+": "+s,a.appendChild(c)}if(e.clip){var m=document.createElement("video");m.controls=!0,m.setAttribute("width","100%"),m.setAttribute("height","135px"),m.load();var l=document.createElement("source");l.src=e.clip.clip,m.appendChild(l),a.appendChild(m)}r.appendChild(a)}))})).catch((function(e){console.log("error",e);var t=document.createElement("div");t.style.textAlign="center",t.style.margin="0 auto",t.innerHTML=o.a.translator.trans("justoverclock-igdb-api.forum.noConnection"),r.appendChild(t)}))},i.view=function(){var e=(new Date).getFullYear();return m("div",{className:"gamesPage"},f.a.prototype.hero(),m("div",{className:"container"},m("div",{className:"sideNavContainer"},m("nav",{className:"nav IndexPage-nav sideNav"},m("ul",null,v()(f.a.prototype.sidebarItems().toArray()))),m("div",{className:"content sideNavOffset"},m("h1",{className:"gamePageTitle"},o.a.translator.trans("justoverclock-igdb-api.forum.pageTitle")," - (",e,")"),m("p",{className:"pagedescription"},o.a.translator.trans("justoverclock-igdb-api.forum.pageText")),m("div",{className:"containerGames",id:"showGamesList"})))))},r}(d.a),y=a(8),N=a.n(y);o.a.initializers.add("justoverclock/igdb-api",(function(){o.a.routes.upcomingGames={path:"/games",component:b},Object(i.extend)(N.a.prototype,"headerItems",(function(e){!0===o.a.forum.attribute("justoverclock-igdb-api.composerAlert")&&e.add("gameAlertBox",m("div",{className:"Alert gameAlert"},m("div",{className:"Alert-body gameAlertBody"},m("h4",null,o.a.translator.trans("justoverclock-igdb-api.forum.game-title-alert-box"),m("i",{class:"fas fa-gamepad composer"})),m("p",{className:"desciption-alert"},o.a.translator.trans("justoverclock-igdb-api.forum.game-title-alert-box-description")))))})),Object(i.extend)(f.a.prototype,"navItems",(function(e){return e.add("upcomingGames",m(l.a,{href:o.a.route("upcomingGames"),icon:"fas fa-gamepad"},o.a.translator.trans("justoverclock-igdb-api.forum.gamesPage")),100),e})),Object(i.extend)(s.a.prototype,"oncreate",(function(){var e=this,t=o.a.forum.attribute("justoverclock-igdb-api.RawgApiKey"),a=this.attrs.discussion.title().split(/\s+/).join("-");if(o.a.session.user)fetch("https://api.rawg.io/api/games/"+a+"?page_size=1&page=1&key="+t).then((function(e){if(!e.ok)throw console.clear(),Error(e.statusText);return e})).then((function(e){return e.json()})).then((function(t){e.gameDet=t,console.log(t),m.redraw()})).catch((function(e){return console.log("This Game title does not exist ;) =>",a)}))})),Object(i.extend)(s.a.prototype,"items",(function(e){if(void 0!==this.gameDet){var t="width:"+this.gameDet.metacritic+"%",a="background-image:url("+this.gameDet.background_image+");";null===this.gameDet.metacritic&&(this.gameDet.metacritic=0,t="width:0%"),void 0!==this.gameDet.description_raw&&(e.remove("title"),e.add("gameDetails",m("div",{className:"gameWrapper"},m("div",{className:"container-fluid"},m("div",{className:"row"},m("div",{className:"col-12 mt-3"},m("div",{className:"card"},m("div",{className:"card-horizontal"},m("div",{className:"img-square-wrapper",style:a},m("div",{className:"metaScore"},o.a.translator.trans("justoverclock-igdb-api.forum.metacriticScore"),": ",this.gameDet.metacritic),m("div",{className:"meter green nostripes"},m("span",{id:"progresscore",style:t}))),m("div",{className:"card-body"},m("h1",{className:"card-title"},this.gameDet.name),m("h4",{className:"gamesubtitle"},o.a.translator.trans("justoverclock-igdb-api.forum.publisher"),": ",this.gameDet.developers[0].name," -"," ",o.a.translator.trans("justoverclock-igdb-api.forum.genres"),": ",this.gameDet.genres[0].name),m("p",{className:"card-text",id:"google_translate_element",translate:"yes"},this.gameDet.description_raw),m("p",{className:"linktometac"},m("i",{className:"fas fa-link metacr"}),m("a",{href:this.gameDet.metacritic_url,target:"_blank",rel:"nofollow",title:this.gameDet.metacritic_url},o.a.translator.trans("justoverclock-igdb-api.forum.seeOnMetaCritic")),m("i",{className:"fas fa-globe-europe offweb"}),m("a",{href:this.gameDet.website,target:"_blank",rel:"nofollow",title:this.gameDet.website},o.a.translator.trans("justoverclock-igdb-api.forum.offwebsite"))))))))),m("div",{className:"userRatings"},m("li",{className:"listofRatings"},m("i",{className:"fas fa-circle excellent"}),"Exceptional (",this.gameDet.ratings[1].count,")"),m("li",{className:"listofRatings"},m("i",{className:"fas fa-circle recommended"}),"Recommended (",this.gameDet.ratings[0].count,")"),m("li",{className:"listofRatings"},m("i",{className:"fas fa-circle meh"}),"Meh (",this.gameDet.ratings[2].count,")"),m("li",{className:"listofRatings"},m("i",{className:"fas fa-circle skip"}),"Skip (",this.gameDet.ratings[3].count,")")))))}}))}))}]);
//# sourceMappingURL=forum.js.map