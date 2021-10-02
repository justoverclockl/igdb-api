module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/forum/components/upcomingGames.js":
/*!***********************************************!*\
  !*** ./src/forum/components/upcomingGames.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return upcomingGames; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4__);






var upcomingGames = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(upcomingGames, _Page);

  function upcomingGames() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = upcomingGames.prototype;

  _proto.oncreate = function oncreate(vnode) {
    _Page.prototype.oncreate.call(this, vnode);

    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.setTitle(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('justoverclock-igdb-api.forum.pagetitle'));
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.setTitleCount(0);
    var RawgKeyPage = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('justoverclock-igdb-api.RawgApiKey');
    var div = document.getElementById('showGamesList');

    var convertToTwoDigits = function convertToTwoDigits(digit) {
      if (digit.toString().length < 2) {
        digit = '0' + digit.toString();
      }

      return digit;
    };

    var date = new Date();
    var year = date.getFullYear();
    var month = convertToTwoDigits(date.getMonth() + 1); // getMonth() returns previous month

    var day = convertToTwoDigits(date.getDate());
    var today = year + '-' + month + '-' + day;
    var nextYear = year + 1 + '-' + month + '-' + day;
    var url = "https://api.rawg.io/api/games?dates=" + today + "," + nextYear + "&ordering=-added&page_size=12&key=" + RawgKeyPage;

    var handleResponse = function handleResponse(response) {
      return response.json().then(function (json) {
        if (response.ok) {
          return json;
        } else {
          return Promise.reject(response);
        }
      });
    };

    fetch(url).then(handleResponse).then(function (data) {
      m.redraw();
      data.results.map(function (game) {
        var LinkMe = 'https://rawg.io/games/' + game.slug;
        var card = document.createElement('div');
        card.setAttribute('class', 'cardupGames');
        var title = document.createElement('h2');
        title.setAttribute('class', 'mainGameTitle');
        title.setAttribute('title', game.name);
        title.textContent = game.name;
        card.appendChild(title);

        if (game.background_image) {
          var image = document.createElement('img');
          image.setAttribute('class', 'imgGame');
          image.setAttribute('alt', game.name);
          image.setAttribute('title', game.name);
          image.src = game.background_image;
          card.appendChild(image);
        }

        if (game.released) {
          var released = game.released;
          released = released.split('-');
          released.push(released.shift());
          released = released.join('/');
          var releaseDate = document.createElement('h4');
          releaseDate.setAttribute('class', 'relDate');
          releaseDate.innerText = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('justoverclock-igdb-api.forum.relDatePage') + ': ' + released;
          card.appendChild(releaseDate);
        }

        if (game.clip) {
          var vid = document.createElement('video');
          vid.controls = true;
          vid.setAttribute('width', '100%');
          vid.setAttribute('height', '135px');
          vid.load();
          var vidSrc = document.createElement('source');
          vidSrc.src = game.clip.clip;
          vid.appendChild(vidSrc);
          card.appendChild(vid);
        }

        div.appendChild(card);
      });
    })["catch"](function (error) {
      console.log('error', error);
      var card = document.createElement('div');
      card.style.textAlign = 'center';
      card.style.margin = '0 auto';
      card.innerHTML = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('justoverclock-igdb-api.forum.noConnection');
      div.appendChild(card);
    });
  };

  _proto.view = function view() {
    var date = new Date();
    var year = date.getFullYear();
    return m("div", {
      className: "gamesPage"
    }, flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.hero(), m("div", {
      className: "container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "nav IndexPage-nav sideNav"
    }, m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default()(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.sidebarItems().toArray()))), m("div", {
      className: "content sideNavOffset"
    }, m("h1", {
      "class": "gamePageTitle"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('justoverclock-igdb-api.forum.pageTitle'), " - (", year, ")"), m("p", {
      "class": "pagedescription"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('justoverclock-igdb-api.forum.pageText')), m("div", {
      className: "containerGames",
      id: "showGamesList"
    })))));
  };

  return upcomingGames;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/DiscussionHero */ "flarum/forum/components/DiscussionHero");
/* harmony import */ var flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_upcomingGames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/upcomingGames */ "./src/forum/components/upcomingGames.js");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5__);






flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('justoverclock/igdb-api', function () {
  flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.routes.upcomingGames = {
    path: '/games',
    component: _components_upcomingGames__WEBPACK_IMPORTED_MODULE_4__["default"]
  };
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default.a.prototype, 'navItems', function (navItems) {
    navItems.add('upcomingGames', m(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.route('upcomingGames'),
      icon: "fas fa-gamepad"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('justoverclock-igdb-api.forum.gamesPage')), 100);
    return navItems;
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'oncreate', function () {
    var _this = this;

    var RawgKey = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('justoverclock-igdb-api.RawgApiKey');
    var discGameTitle = this.attrs.discussion.title().split(/\s+/).join('-');
    var isLoggedIn = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user; // gestiamo gli errori nella risposta

    function handleErrors(response) {
      if (response.ok === false) {
        throw Error(response.statusText);
      }

      return response;
    } // per evitare troppe richieste all'api, effettuiamo fetch solo per chi è registrato


    if (isLoggedIn) {
      var GameApi = fetch('https://api.rawg.io/api/games/' + discGameTitle + '?page_size=1&page=1&key=' + RawgKey).then(handleErrors).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this.gameDet = data;
        console.log(data);
        m.redraw();
      })["catch"](function (error) {
        return console.log('This Game title does not exist ;) =>', discGameTitle);
      });
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'items', function (items) {
    if (typeof this.gameDet === 'undefined') return; // css per la barra punteggi e l'immagine di background

    var score = 'width:' + this.gameDet.metacritic + '%';
    var bgGame = 'background-image:url(' + this.gameDet.background_image + ');';

    if (this.gameDet.metacritic === null) {
      this.gameDet.metacritic = 0;
      score = 'width:0%';
    } // non mostriamo l'html se non c'è nulla da mostrare


    if (this.gameDet.description_raw === undefined) {
      return;
    } else {
      items.remove('title');
      items.add('gameDetails', m("div", {
        "class": "gameWrapper"
      }, m("div", {
        "class": "container-fluid"
      }, m("div", {
        "class": "row"
      }, m("div", {
        "class": "col-12 mt-3"
      }, m("div", {
        "class": "card"
      }, m("div", {
        "class": "card-horizontal"
      }, m("div", {
        "class": "img-square-wrapper",
        style: bgGame
      }, m("div", {
        "class": "metaScore"
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('justoverclock-igdb-api.forum.metacriticScore'), ": ", this.gameDet.metacritic), m("div", {
        "class": "meter green nostripes"
      }, m("span", {
        id: "progresscore",
        style: score
      }))), m("div", {
        "class": "card-body"
      }, m("h1", {
        "class": "card-title"
      }, this.gameDet.name), m("h4", {
        "class": "gamesubtitle"
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('justoverclock-igdb-api.forum.publisher'), ": ", this.gameDet.developers[0].name, " -", ' ', flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('justoverclock-igdb-api.forum.genres'), ": ", this.gameDet.genres[0].name), m("p", {
        "class": "card-text",
        id: "google_translate_element",
        translate: "yes"
      }, this.gameDet.description_raw), m("p", {
        "class": "linktometac"
      }, m("i", {
        "class": "fas fa-link metacr"
      }), m("a", {
        href: this.gameDet.metacritic_url,
        target: "_blank",
        rel: "nofollow",
        title: this.gameDet.metacritic_url
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('justoverclock-igdb-api.forum.seeOnMetaCritic')), m("i", {
        "class": "fas fa-globe-europe offweb"
      }), m("a", {
        href: this.gameDet.website,
        target: "_blank",
        rel: "nofollow",
        title: this.gameDet.website
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('justoverclock-igdb-api.forum.offwebsite'))))))))), m("div", {
        "class": "userRatings"
      }, m("li", {
        "class": "listofRatings"
      }, m("i", {
        "class": "fas fa-circle excellent"
      }), "Exceptional (", this.gameDet.ratings[1].count, ")"), m("li", {
        "class": "listofRatings"
      }, m("i", {
        "class": "fas fa-circle recommended"
      }), "Recommended (", this.gameDet.ratings[0].count, ")"), m("li", {
        "class": "listofRatings"
      }, m("i", {
        "class": "fas fa-circle meh"
      }), "Meh (", this.gameDet.ratings[2].count, ")"), m("li", {
        "class": "listofRatings"
      }, m("i", {
        "class": "fas fa-circle skip"
      }), "Skip (", this.gameDet.ratings[3].count, ")"))));
    }
  });
});

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/DiscussionHero":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionHero']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionHero'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map