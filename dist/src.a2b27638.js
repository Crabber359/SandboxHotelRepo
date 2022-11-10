// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/dd.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElement = getElement;
var _this = void 0;
function getElement() {}
// for (let i = 0; i < document.body.childNodes.length; i++) {
//   console.log(document.body.childNodes[i]);
// }
// console.log(document.body.childNodes);

// for (let elem of document.body.children) {
//   console.log(elem);
// }

function changeBackground() {
  console.log("FUNCTION CHANGE", this);
  this.style.backgroundColor = "red";
}
function changeBackgroundToBlue() {
  console.log("FUNCTION CHANGE TO BLUE", this);
  this.style.backgroundColor = "blue";
}
var p = document.querySelectorAll("p");
// console.log(p);
// console.log("IS ARRAY", Array.isArray(p));
p.forEach(function (element) {
  console.log("FOREACH", _this); // изначально window по клику становится <p>
  element.onclick = changeBackground;
});
console.log(p);
document.querySelector("p").onclick = changeBackgroundToBlue;

// const imitationToggle = {
//   isStarted: false,

//   start() {
//     this.isStarted = true;
//     console.log(this);
//   },

//   stop() {
//     this.isStarted = false;
//   },

//   toggleCreator() {
//     const toggle = () => {
//       console.log(this);
//       this.isStarted = !this.isStarted;
//     };

//     return toggle;
//   }
// };

// const app = document.getElementById("app");
// const button = createButton({
//   label: "GO",
//   onClick: () => {
//     console.log(this);
//     imitationToggle.start();
//   }
// });

// app.appendChild(button);

// button.createToggle = imitationToggle.toggleCreator;
// const buttonToggle = button.createToggle();
// buttonToggle();

// class Weapon {
//   constructor(props) {
//     this.name = props.name;
//     this.color = props?.color ?? "white";
//     this.currentDirability = props?.durability ?? 100;
//     this.maxDurability = this.currentDirability;
//   }

//   attack(weapon) {
//     if (this.currentDirability <= 0) {
//       console.log(`${this.name} is broken`);
//       return;
//     }
//     this.currentDirability -= 20;
//     if (weapon) weapon.attack();
//   }

//   repair() {
//     this.currentDirability = this.maxDurability;
//   }
// }

// const sword = new Weapon({
//   name: "Frostmorn"
// });

// const axe = new Weapon({
//   color: "red",
//   name: "Vamire death",
//   durability: 200
// });

// axe.attack(sword);
// axe.attack(sword);
// console.log(axe.currentDirability);
// console.log(sword.currentDirability);

//методы выбора элементов м дом дерева
//поработать с контекстом, разница межлду function и () => {}

//Мы хотим расширить нашу сеть и хотим построить еще один отель
//Написать класс guest который создавать гостей
//Написать класс Room который будет работать с комнатами и с ее методами
//(очистить комнату от гостя, записать госят в комнату)
//у каждой комнаты появилась стоимость аренды за ночь в зависомости от вместистиельности и т.д.
//У класса комнаты должен быть метод который позволит нам ее сохранть в локал сторедж
//метод - который возвращает чистые данные о комнате (без функции)
//соответственно в конструкторе должна быть возможность воссоздать комнату из записи в локалсторедж

//класс Комната, у нее разные методы.
//у тебя будет не просто массив из Объектов комнат, а именно из экземпляров классов комнат
//должен пояться метод toObject, который просто возвращет объект для сохранения его в базе
//в том же виде в котолром мы сохраняем сейчас
//при впервой загрузке сайта, из данных сохраненных в локалсторедже у тебя создает массив экземпляров класс Room
//и дальше ты с ним только и работаешь, переиодиччески сохраняя в базу данных обновления

//класс Отеля
//в котором будет обработка именно всех комнат,
//например в нем будет метод save(), load()

//все это нам надо чтобы мы могли создавать несколько отелей
//большенство из этих методов у нас уже написано, тебе надо
//только пеерписать их в классовую модель

//Класс Гости
//Класс Группы
//Класс Комнаты
//Класс Отель
},{}],"src/lib/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROOMS_KEY = exports.MIN_AGE = exports.MAX_AGE = exports.HISTORY_OF_GUESTS = exports.EMPTY_ROOM = exports.COUNT_OF_ROOMS = void 0;
var COUNT_OF_ROOMS = 20;
exports.COUNT_OF_ROOMS = COUNT_OF_ROOMS;
var MIN_AGE = 18;
exports.MIN_AGE = MIN_AGE;
var MAX_AGE = 90;
exports.MAX_AGE = MAX_AGE;
var ROOMS_KEY = "room";
exports.ROOMS_KEY = ROOMS_KEY;
var HISTORY_OF_GUESTS = "history";
exports.HISTORY_OF_GUESTS = HISTORY_OF_GUESTS;
var EMPTY_ROOM = {
  guests: null,
  whenLeave: null,
  capacity: null
};
exports.EMPTY_ROOM = EMPTY_ROOM;
},{}],"src/lib/helpers.date.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDateToReadable = formatDateToReadable;
exports.getTimeOfRent = getTimeOfRent;
function addZero(item) {
  return item < 10 ? "0" + item : item;
}
function formatDateToReadable(dateValue) {
  var time = new Date(dateValue);
  var year = time.getFullYear();
  var month = addZero(time.getMonth() + 1);
  var day = addZero(time.getDate());
  var hours = addZero(time.getHours());
  var minutes = addZero(time.getMinutes());
  var seconds = addZero(time.getSeconds());
  return "".concat(hours, ":").concat(minutes, ":").concat(seconds, " ").concat(day, ".").concat(month, ".").concat(year);
}
function getTimeOfRent(secondsOfRent) {
  return Date.now() + secondsOfRent * 1000;
}
},{}],"src/lib/helpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createArrayWithRule = createArrayWithRule;
exports.createEmptyHotel = createEmptyHotel;
exports.createRoomRecord = createRoomRecord;
exports.findFirstEmptyRoom = findFirstEmptyRoom;
exports.refreshHotelRooms = refreshHotelRooms;
var _constants = require("./constants");
var _helpers = require("./helpers.date");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function findFirstEmptyRoom(rooms) {
  return rooms.findIndex(function (room) {
    return !room.guests;
  });
}
function createEmptyHotel() {
  var list = [];
  var ROOMS_COUNT_MAP = [4, 4, 4, 4, 4];
  ROOMS_COUNT_MAP.forEach(function (countOfRooms, capacity) {
    for (var i = 0; i < countOfRooms; i++) {
      list.push(_objectSpread(_objectSpread({}, _constants.EMPTY_ROOM), {}, {
        capacity: capacity + 1
      }));
    }
  });
  return list;
}
function refreshHotelRooms(rooms) {
  rooms.forEach(function (room) {
    if (room.whenLeave < Date.now()) {
      room.whenLeave = null;
      room.guests = null;
    }
  });
  return rooms;
}
function createRoomRecord(guests, secondsOfRent) {
  return {
    guests: guests,
    whenLeave: (0, _helpers.getTimeOfRent)(secondsOfRent)
  };
}
function createArrayWithRule(size, rule) {
  return Array(size).fill(null).map(function (_, index) {
    return rule(index);
  });
}
},{"./constants":"src/lib/constants.js","./helpers.date":"src/lib/helpers.date.js"}],"src/lib/helpers.math.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomGaussValue = getRandomGaussValue;
function getRandomGaussValue(min, max) {
  var skew = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.4;
  var u = 0,
    v = 0;
  while (u === 0) {
    u = Math.random();
  } //Converting [0,1) to (0,1)
  while (v === 0) {
    v = Math.random();
  }
  var num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) num = getRandomGaussValue(min, max, skew);
  // resample between 0 and 1 if out of range
  else {
    num = Math.pow(num, skew); // Skew
    num *= max - min; // Stretch to fill range
    num += min; // offset to min
  }

  return Math.round(num);
}
},{}],"src/lib/mock/names.json":[function(require,module,exports) {
module.exports = [{
  "name": "Jose"
}, {
  "name": "Wilt"
}, {
  "name": "Layla"
}, {
  "name": "Minny"
}, {
  "name": "Eddi"
}, {
  "name": "Evvie"
}, {
  "name": "Wilhelmina"
}, {
  "name": "Zacherie"
}, {
  "name": "Gareth"
}, {
  "name": "Raff"
}, {
  "name": "Kathye"
}, {
  "name": "Jacklyn"
}, {
  "name": "Eliza"
}, {
  "name": "Kristi"
}, {
  "name": "Morganica"
}, {
  "name": "Euphemia"
}, {
  "name": "Ag"
}, {
  "name": "Lorilee"
}, {
  "name": "Jacinta"
}, {
  "name": "Essy"
}, {
  "name": "Nial"
}, {
  "name": "Karlotta"
}, {
  "name": "Phyllida"
}, {
  "name": "Nathanil"
}, {
  "name": "Edie"
}, {
  "name": "Connor"
}, {
  "name": "Flemming"
}, {
  "name": "Reagen"
}, {
  "name": "Karisa"
}, {
  "name": "Hughie"
}, {
  "name": "Bonny"
}, {
  "name": "Rafaello"
}, {
  "name": "Elaine"
}, {
  "name": "Reese"
}, {
  "name": "Reinaldo"
}, {
  "name": "Harrietta"
}, {
  "name": "Kirk"
}, {
  "name": "Dannie"
}, {
  "name": "Anders"
}, {
  "name": "Taryn"
}, {
  "name": "Sumner"
}, {
  "name": "Danita"
}, {
  "name": "Paulina"
}, {
  "name": "Rozalie"
}, {
  "name": "Pincus"
}, {
  "name": "Joane"
}, {
  "name": "Violette"
}, {
  "name": "Eugenie"
}, {
  "name": "Jerrome"
}, {
  "name": "Federica"
}, {
  "name": "Thacher"
}, {
  "name": "Wilone"
}, {
  "name": "Leanna"
}, {
  "name": "Merrily"
}, {
  "name": "Zach"
}, {
  "name": "Ashil"
}, {
  "name": "Georgena"
}, {
  "name": "Ofelia"
}, {
  "name": "Danit"
}, {
  "name": "Mikol"
}, {
  "name": "Porty"
}, {
  "name": "Archibaldo"
}, {
  "name": "Leandra"
}, {
  "name": "Felecia"
}, {
  "name": "Francisca"
}, {
  "name": "Giordano"
}, {
  "name": "Fleming"
}, {
  "name": "Sigvard"
}, {
  "name": "Udale"
}, {
  "name": "Berky"
}, {
  "name": "Constantino"
}, {
  "name": "Marco"
}, {
  "name": "Vernor"
}, {
  "name": "Lucius"
}, {
  "name": "Marika"
}, {
  "name": "Der"
}, {
  "name": "Dorey"
}, {
  "name": "Myrilla"
}, {
  "name": "Jacques"
}, {
  "name": "Caterina"
}, {
  "name": "Matty"
}, {
  "name": "Clemmy"
}, {
  "name": "Nolie"
}, {
  "name": "Wade"
}, {
  "name": "Reina"
}, {
  "name": "Harrietta"
}, {
  "name": "Sebastien"
}, {
  "name": "Nikolos"
}, {
  "name": "Adelaide"
}, {
  "name": "Lyda"
}, {
  "name": "Evvie"
}, {
  "name": "Sheila"
}, {
  "name": "Anissa"
}, {
  "name": "Annalee"
}, {
  "name": "Fern"
}, {
  "name": "Kermie"
}, {
  "name": "Sollie"
}, {
  "name": "Nyssa"
}, {
  "name": "Beck"
}, {
  "name": "Sawyere"
}, {
  "name": "Delphine"
}, {
  "name": "Estrellita"
}, {
  "name": "Hort"
}, {
  "name": "Diahann"
}, {
  "name": "Gwendolin"
}, {
  "name": "Talbot"
}, {
  "name": "Jonathan"
}, {
  "name": "Vina"
}, {
  "name": "Allin"
}, {
  "name": "Corri"
}, {
  "name": "Samson"
}, {
  "name": "Catlee"
}, {
  "name": "Norene"
}, {
  "name": "Alexandro"
}, {
  "name": "Benita"
}, {
  "name": "Elvina"
}, {
  "name": "Letitia"
}, {
  "name": "Dewain"
}, {
  "name": "Brear"
}, {
  "name": "Jourdain"
}, {
  "name": "Anderea"
}, {
  "name": "Skipp"
}, {
  "name": "Sergei"
}, {
  "name": "Sofie"
}, {
  "name": "Zebulon"
}, {
  "name": "Modestine"
}, {
  "name": "Emmi"
}, {
  "name": "Magdalene"
}, {
  "name": "Iormina"
}, {
  "name": "Way"
}, {
  "name": "Jacquenette"
}, {
  "name": "Stella"
}, {
  "name": "Sophi"
}, {
  "name": "Dominic"
}, {
  "name": "Morey"
}, {
  "name": "Babita"
}, {
  "name": "Madelena"
}, {
  "name": "Herbert"
}, {
  "name": "Benoit"
}, {
  "name": "Alley"
}, {
  "name": "Dall"
}, {
  "name": "Brandice"
}, {
  "name": "Francene"
}, {
  "name": "Errol"
}, {
  "name": "Bartholemy"
}, {
  "name": "Eran"
}, {
  "name": "Amity"
}, {
  "name": "Stearn"
}, {
  "name": "Mignonne"
}, {
  "name": "Andrea"
}, {
  "name": "Dun"
}, {
  "name": "Neils"
}, {
  "name": "Dunstan"
}, {
  "name": "Merrilee"
}, {
  "name": "Jeannette"
}, {
  "name": "Georgi"
}, {
  "name": "Boone"
}, {
  "name": "Dennie"
}, {
  "name": "Ulrikaumeko"
}, {
  "name": "Mal"
}, {
  "name": "Clare"
}, {
  "name": "Shannan"
}, {
  "name": "Deborah"
}, {
  "name": "Calvin"
}, {
  "name": "Elliott"
}, {
  "name": "Irina"
}, {
  "name": "Lilian"
}, {
  "name": "Glori"
}, {
  "name": "Hollie"
}, {
  "name": "Barri"
}, {
  "name": "Cherianne"
}, {
  "name": "Timothea"
}, {
  "name": "Julee"
}, {
  "name": "Marla"
}, {
  "name": "Breena"
}, {
  "name": "Angelica"
}, {
  "name": "Tracie"
}, {
  "name": "Marigold"
}, {
  "name": "Aeriela"
}, {
  "name": "Chariot"
}, {
  "name": "Roslyn"
}, {
  "name": "Faydra"
}, {
  "name": "Griffie"
}, {
  "name": "Aldric"
}, {
  "name": "Dene"
}, {
  "name": "Felisha"
}, {
  "name": "Art"
}, {
  "name": "Markos"
}, {
  "name": "Kikelia"
}, {
  "name": "Michale"
}, {
  "name": "Sandor"
}, {
  "name": "Domeniga"
}, {
  "name": "Erasmus"
}, {
  "name": "Westleigh"
}, {
  "name": "Bobbette"
}, {
  "name": "Josephina"
}, {
  "name": "Joscelin"
}, {
  "name": "Granny"
}, {
  "name": "Skipper"
}, {
  "name": "Meghann"
}, {
  "name": "Jaquelin"
}, {
  "name": "Pepita"
}, {
  "name": "Loella"
}, {
  "name": "Francois"
}, {
  "name": "Muriel"
}, {
  "name": "Lennie"
}, {
  "name": "Nona"
}, {
  "name": "Roth"
}, {
  "name": "Quintilla"
}, {
  "name": "Clarabelle"
}, {
  "name": "Rozalie"
}, {
  "name": "Briny"
}, {
  "name": "Cori"
}, {
  "name": "Benjamen"
}, {
  "name": "Addie"
}, {
  "name": "Cathryn"
}, {
  "name": "Yehudit"
}, {
  "name": "Vern"
}, {
  "name": "Nita"
}, {
  "name": "Ernesta"
}, {
  "name": "Renelle"
}, {
  "name": "Jessica"
}, {
  "name": "Jacquelin"
}, {
  "name": "Alfie"
}, {
  "name": "Fitz"
}, {
  "name": "Khalil"
}, {
  "name": "Michelina"
}, {
  "name": "Charlotte"
}, {
  "name": "Averill"
}, {
  "name": "Peggie"
}, {
  "name": "Marcella"
}, {
  "name": "Kass"
}, {
  "name": "Bard"
}, {
  "name": "Sidney"
}, {
  "name": "Carly"
}, {
  "name": "Erda"
}, {
  "name": "Mair"
}, {
  "name": "Franchot"
}, {
  "name": "Tatiana"
}, {
  "name": "Nick"
}, {
  "name": "Michaella"
}, {
  "name": "Dareen"
}, {
  "name": "Lynnette"
}, {
  "name": "Armando"
}, {
  "name": "Roldan"
}, {
  "name": "Victoir"
}, {
  "name": "Edee"
}, {
  "name": "Joseph"
}, {
  "name": "Jemima"
}, {
  "name": "Karina"
}, {
  "name": "Stuart"
}, {
  "name": "Arlee"
}, {
  "name": "Drusilla"
}, {
  "name": "Kari"
}, {
  "name": "Doloritas"
}, {
  "name": "Angeli"
}, {
  "name": "Erena"
}, {
  "name": "Lucienne"
}, {
  "name": "Karen"
}, {
  "name": "Dulcie"
}, {
  "name": "Alameda"
}, {
  "name": "Riordan"
}, {
  "name": "Carmine"
}, {
  "name": "Beverly"
}, {
  "name": "Chucho"
}, {
  "name": "Jeanie"
}, {
  "name": "Barby"
}, {
  "name": "Parnell"
}, {
  "name": "Jilli"
}, {
  "name": "Richmound"
}, {
  "name": "Dalila"
}, {
  "name": "Efrem"
}, {
  "name": "Harris"
}, {
  "name": "Freddie"
}, {
  "name": "Agathe"
}, {
  "name": "Carole"
}, {
  "name": "Caritta"
}, {
  "name": "Delly"
}, {
  "name": "Ermentrude"
}, {
  "name": "Vikky"
}, {
  "name": "Flossie"
}, {
  "name": "Allyson"
}, {
  "name": "Natala"
}, {
  "name": "Heindrick"
}, {
  "name": "Phil"
}, {
  "name": "Rhonda"
}, {
  "name": "Myrna"
}, {
  "name": "Oran"
}, {
  "name": "Deni"
}, {
  "name": "Sol"
}, {
  "name": "Kamillah"
}, {
  "name": "Ibbie"
}, {
  "name": "Tobye"
}, {
  "name": "Germain"
}, {
  "name": "Harley"
}, {
  "name": "Elli"
}, {
  "name": "Des"
}, {
  "name": "Chan"
}, {
  "name": "Jany"
}, {
  "name": "Norby"
}, {
  "name": "Jonathon"
}, {
  "name": "Laurette"
}, {
  "name": "Sher"
}, {
  "name": "Ellis"
}, {
  "name": "Cordell"
}, {
  "name": "Lesya"
}, {
  "name": "Benjamen"
}, {
  "name": "Winona"
}, {
  "name": "Ava"
}, {
  "name": "Calypso"
}, {
  "name": "Alexis"
}, {
  "name": "Fanni"
}, {
  "name": "Carver"
}, {
  "name": "Fritz"
}, {
  "name": "Norbie"
}, {
  "name": "Elnore"
}, {
  "name": "Vilhelmina"
}, {
  "name": "Jaquelin"
}, {
  "name": "Garnet"
}, {
  "name": "Horace"
}, {
  "name": "Riccardo"
}, {
  "name": "Aryn"
}, {
  "name": "Mannie"
}, {
  "name": "Bobina"
}, {
  "name": "Dulciana"
}, {
  "name": "Sabra"
}, {
  "name": "Kermit"
}, {
  "name": "Norbie"
}, {
  "name": "Lemmie"
}, {
  "name": "Abigael"
}, {
  "name": "Annadiana"
}, {
  "name": "Cam"
}, {
  "name": "Isadora"
}, {
  "name": "Davida"
}, {
  "name": "Normie"
}, {
  "name": "Ivette"
}, {
  "name": "Van"
}, {
  "name": "Penny"
}, {
  "name": "Adela"
}, {
  "name": "Morna"
}, {
  "name": "Anabel"
}, {
  "name": "Nell"
}, {
  "name": "Clive"
}, {
  "name": "Evangeline"
}, {
  "name": "Netta"
}, {
  "name": "Polly"
}, {
  "name": "Kimmi"
}, {
  "name": "Wye"
}, {
  "name": "Hatty"
}, {
  "name": "Ruthann"
}, {
  "name": "Clem"
}, {
  "name": "Elnore"
}, {
  "name": "Bowie"
}, {
  "name": "Geri"
}, {
  "name": "Cobbie"
}, {
  "name": "Jaquenetta"
}, {
  "name": "Vita"
}, {
  "name": "Prudy"
}, {
  "name": "Ferdie"
}, {
  "name": "Latia"
}, {
  "name": "Dita"
}, {
  "name": "Rolfe"
}, {
  "name": "Benjamin"
}, {
  "name": "Derby"
}, {
  "name": "Lurlene"
}, {
  "name": "Bud"
}, {
  "name": "Tallou"
}, {
  "name": "Kean"
}, {
  "name": "Keriann"
}, {
  "name": "Seth"
}, {
  "name": "Tammy"
}, {
  "name": "Biddy"
}, {
  "name": "Osborne"
}, {
  "name": "Leticia"
}, {
  "name": "Carrol"
}, {
  "name": "Datha"
}, {
  "name": "Meggi"
}, {
  "name": "Corey"
}, {
  "name": "Eba"
}, {
  "name": "Dulsea"
}, {
  "name": "Lyn"
}, {
  "name": "Ryann"
}, {
  "name": "Lew"
}, {
  "name": "Giselle"
}, {
  "name": "Gerome"
}, {
  "name": "Loria"
}, {
  "name": "Augie"
}, {
  "name": "Gifford"
}, {
  "name": "Udell"
}, {
  "name": "Marigold"
}, {
  "name": "Abel"
}, {
  "name": "Jose"
}, {
  "name": "Clarabelle"
}, {
  "name": "Sayers"
}, {
  "name": "Miller"
}, {
  "name": "Granthem"
}, {
  "name": "Stephani"
}, {
  "name": "Marinna"
}, {
  "name": "Jocelin"
}, {
  "name": "Adolphus"
}, {
  "name": "Roscoe"
}, {
  "name": "Catrina"
}, {
  "name": "Nikos"
}, {
  "name": "Lindie"
}, {
  "name": "Davin"
}, {
  "name": "Mariam"
}, {
  "name": "Alicea"
}, {
  "name": "Burnard"
}, {
  "name": "Jessie"
}, {
  "name": "Prince"
}, {
  "name": "Giuseppe"
}, {
  "name": "Avrom"
}, {
  "name": "Etti"
}, {
  "name": "Angie"
}, {
  "name": "Torry"
}, {
  "name": "Lothario"
}, {
  "name": "Marissa"
}, {
  "name": "Merrily"
}, {
  "name": "Franciskus"
}, {
  "name": "Carleen"
}, {
  "name": "Frederique"
}, {
  "name": "Dyann"
}, {
  "name": "Kally"
}, {
  "name": "Gamaliel"
}, {
  "name": "Corbie"
}, {
  "name": "Neal"
}, {
  "name": "Jerrome"
}, {
  "name": "Leandra"
}, {
  "name": "Bryan"
}, {
  "name": "Bartel"
}, {
  "name": "Dominica"
}, {
  "name": "Anatola"
}, {
  "name": "Tybi"
}, {
  "name": "Lucita"
}, {
  "name": "Avrom"
}, {
  "name": "Joycelin"
}, {
  "name": "Caron"
}, {
  "name": "Raphaela"
}, {
  "name": "Jonah"
}, {
  "name": "Stevy"
}, {
  "name": "Ciro"
}, {
  "name": "Giraud"
}, {
  "name": "Edee"
}, {
  "name": "Sayer"
}, {
  "name": "Aubert"
}, {
  "name": "Pearl"
}, {
  "name": "Baird"
}, {
  "name": "Ola"
}, {
  "name": "Henrie"
}, {
  "name": "Christel"
}, {
  "name": "Itch"
}, {
  "name": "Vivyanne"
}, {
  "name": "Francklyn"
}, {
  "name": "Ardys"
}, {
  "name": "Starlin"
}, {
  "name": "Farra"
}, {
  "name": "Yetty"
}, {
  "name": "Ellerey"
}, {
  "name": "Pablo"
}, {
  "name": "Sollie"
}, {
  "name": "Heda"
}, {
  "name": "Brina"
}, {
  "name": "Marybelle"
}, {
  "name": "Wheeler"
}, {
  "name": "Coriss"
}, {
  "name": "Pasquale"
}, {
  "name": "Montgomery"
}, {
  "name": "Mathias"
}, {
  "name": "Fara"
}, {
  "name": "Mel"
}, {
  "name": "Belle"
}, {
  "name": "Carlo"
}, {
  "name": "Irene"
}, {
  "name": "Eba"
}, {
  "name": "Melisandra"
}, {
  "name": "Jammie"
}, {
  "name": "Agustin"
}, {
  "name": "Dorri"
}, {
  "name": "Westleigh"
}, {
  "name": "Guss"
}, {
  "name": "Hillie"
}, {
  "name": "Wes"
}, {
  "name": "Hinda"
}, {
  "name": "Brok"
}, {
  "name": "Marsiella"
}, {
  "name": "Salvador"
}, {
  "name": "Chrisy"
}, {
  "name": "Lynsey"
}, {
  "name": "Arley"
}, {
  "name": "Leicester"
}, {
  "name": "Reeva"
}, {
  "name": "Paxon"
}, {
  "name": "Peadar"
}, {
  "name": "Mel"
}, {
  "name": "Bell"
}, {
  "name": "Ravi"
}, {
  "name": "Rosita"
}, {
  "name": "Tamra"
}, {
  "name": "Lee"
}, {
  "name": "Kiri"
}, {
  "name": "Perl"
}, {
  "name": "Francklin"
}, {
  "name": "Krystalle"
}, {
  "name": "Prince"
}, {
  "name": "Burg"
}, {
  "name": "Arline"
}, {
  "name": "Faina"
}, {
  "name": "Bertram"
}, {
  "name": "Nollie"
}, {
  "name": "Ira"
}, {
  "name": "Bard"
}, {
  "name": "Alida"
}, {
  "name": "Petey"
}, {
  "name": "Tiffie"
}, {
  "name": "Fons"
}, {
  "name": "Noell"
}, {
  "name": "Torrin"
}, {
  "name": "Kora"
}, {
  "name": "Niel"
}, {
  "name": "Cleve"
}, {
  "name": "Eloisa"
}, {
  "name": "Lucilia"
}, {
  "name": "Klement"
}, {
  "name": "Susannah"
}, {
  "name": "Zebadiah"
}, {
  "name": "Ashly"
}, {
  "name": "Lilla"
}, {
  "name": "Annette"
}, {
  "name": "Peirce"
}, {
  "name": "Selma"
}, {
  "name": "Julita"
}, {
  "name": "Eziechiele"
}, {
  "name": "Joanna"
}, {
  "name": "Westbrook"
}, {
  "name": "Cristabel"
}, {
  "name": "Cyril"
}, {
  "name": "Kristal"
}, {
  "name": "Roley"
}, {
  "name": "Amara"
}, {
  "name": "Indira"
}, {
  "name": "Sonnie"
}, {
  "name": "Griswold"
}, {
  "name": "Dalt"
}, {
  "name": "Jackquelin"
}, {
  "name": "Lorilyn"
}, {
  "name": "Corella"
}, {
  "name": "Daphene"
}, {
  "name": "Jerrine"
}, {
  "name": "Clemence"
}, {
  "name": "Marge"
}, {
  "name": "Rorie"
}, {
  "name": "Nathalie"
}, {
  "name": "Isidore"
}, {
  "name": "Petra"
}, {
  "name": "Niel"
}, {
  "name": "Edwin"
}, {
  "name": "Rip"
}, {
  "name": "Deeyn"
}, {
  "name": "Andras"
}, {
  "name": "Prinz"
}, {
  "name": "Gwendolen"
}, {
  "name": "Clair"
}, {
  "name": "Mala"
}, {
  "name": "Idalina"
}, {
  "name": "Mirelle"
}, {
  "name": "Kalle"
}, {
  "name": "Kahlil"
}, {
  "name": "Lamar"
}, {
  "name": "Alexis"
}, {
  "name": "Tirrell"
}, {
  "name": "Aeriela"
}, {
  "name": "Genevieve"
}, {
  "name": "Philomena"
}, {
  "name": "Winston"
}, {
  "name": "Darryl"
}, {
  "name": "Ailey"
}, {
  "name": "Adey"
}, {
  "name": "Lemmie"
}, {
  "name": "Michele"
}, {
  "name": "Nolana"
}, {
  "name": "Therese"
}, {
  "name": "Bridget"
}, {
  "name": "Brianne"
}, {
  "name": "Winifield"
}, {
  "name": "Cherrita"
}, {
  "name": "Mariele"
}, {
  "name": "Rochester"
}, {
  "name": "Tracie"
}, {
  "name": "Alic"
}, {
  "name": "Aryn"
}, {
  "name": "Demetris"
}, {
  "name": "Kilian"
}, {
  "name": "Dyna"
}, {
  "name": "Kamilah"
}, {
  "name": "Brittan"
}, {
  "name": "Viki"
}, {
  "name": "Bethena"
}, {
  "name": "Romonda"
}, {
  "name": "Louella"
}, {
  "name": "Ike"
}, {
  "name": "Rodrigo"
}, {
  "name": "Bart"
}, {
  "name": "Angelo"
}, {
  "name": "Laraine"
}, {
  "name": "Ivory"
}, {
  "name": "Laurice"
}, {
  "name": "Albertina"
}, {
  "name": "Idelle"
}, {
  "name": "Cirstoforo"
}, {
  "name": "Jayme"
}, {
  "name": "Prudy"
}, {
  "name": "Marcella"
}, {
  "name": "Johnath"
}, {
  "name": "Percy"
}, {
  "name": "Gunner"
}, {
  "name": "Felicle"
}, {
  "name": "Corbett"
}, {
  "name": "Cooper"
}, {
  "name": "Decca"
}, {
  "name": "Walker"
}, {
  "name": "Willie"
}, {
  "name": "Pearl"
}, {
  "name": "Lewiss"
}, {
  "name": "Melodee"
}, {
  "name": "Tallou"
}, {
  "name": "Pierce"
}, {
  "name": "Bendix"
}, {
  "name": "Dolf"
}, {
  "name": "Tad"
}, {
  "name": "Woodie"
}, {
  "name": "Dalenna"
}, {
  "name": "Cobby"
}, {
  "name": "Sephira"
}, {
  "name": "Mar"
}, {
  "name": "Stefano"
}, {
  "name": "Beryl"
}, {
  "name": "Dicky"
}, {
  "name": "Jane"
}, {
  "name": "Athene"
}, {
  "name": "Rowe"
}, {
  "name": "Felice"
}, {
  "name": "Linnie"
}, {
  "name": "Tiena"
}, {
  "name": "Ag"
}, {
  "name": "Curtice"
}, {
  "name": "Ernest"
}, {
  "name": "Thekla"
}, {
  "name": "Brose"
}, {
  "name": "Kylen"
}, {
  "name": "Terra"
}, {
  "name": "Lexine"
}, {
  "name": "Lesly"
}, {
  "name": "Cesar"
}, {
  "name": "Darrick"
}, {
  "name": "Mufi"
}, {
  "name": "Towney"
}, {
  "name": "Brock"
}, {
  "name": "Bastian"
}, {
  "name": "Cornelius"
}, {
  "name": "Reynold"
}, {
  "name": "Audrye"
}, {
  "name": "Tymothy"
}, {
  "name": "Annaliese"
}, {
  "name": "Lucius"
}, {
  "name": "Benjamen"
}, {
  "name": "Amalea"
}, {
  "name": "Cecelia"
}, {
  "name": "Nelle"
}, {
  "name": "Ilysa"
}, {
  "name": "Findley"
}, {
  "name": "Pollyanna"
}, {
  "name": "Lisle"
}, {
  "name": "Dayle"
}, {
  "name": "Laure"
}, {
  "name": "Luke"
}, {
  "name": "Sissie"
}, {
  "name": "Lynde"
}, {
  "name": "Melba"
}, {
  "name": "Cazzie"
}, {
  "name": "Fionnula"
}, {
  "name": "Dill"
}, {
  "name": "Eugen"
}, {
  "name": "Savina"
}, {
  "name": "Kirby"
}, {
  "name": "Thadeus"
}, {
  "name": "Godfree"
}, {
  "name": "Ky"
}, {
  "name": "Martelle"
}, {
  "name": "Martelle"
}, {
  "name": "Alano"
}, {
  "name": "Cinderella"
}, {
  "name": "De witt"
}, {
  "name": "Noreen"
}, {
  "name": "Tasha"
}, {
  "name": "Tera"
}, {
  "name": "Liliane"
}, {
  "name": "Daisey"
}, {
  "name": "Kain"
}, {
  "name": "Chico"
}, {
  "name": "Erin"
}, {
  "name": "Hermon"
}, {
  "name": "Rubin"
}, {
  "name": "Leanor"
}, {
  "name": "Herrick"
}, {
  "name": "Diane"
}, {
  "name": "Delila"
}, {
  "name": "Claus"
}, {
  "name": "Marcellus"
}, {
  "name": "Leon"
}, {
  "name": "Gaelan"
}, {
  "name": "Andrew"
}, {
  "name": "Davina"
}, {
  "name": "Letti"
}, {
  "name": "Farica"
}, {
  "name": "Ephrem"
}, {
  "name": "Coriss"
}, {
  "name": "Alina"
}, {
  "name": "Curry"
}, {
  "name": "Roxanna"
}, {
  "name": "Wynnie"
}, {
  "name": "Barty"
}, {
  "name": "Jamesy"
}, {
  "name": "Randolph"
}, {
  "name": "Patience"
}, {
  "name": "Cinda"
}, {
  "name": "Agustin"
}, {
  "name": "Mattheus"
}, {
  "name": "Chip"
}, {
  "name": "Kaycee"
}, {
  "name": "Lydia"
}, {
  "name": "Prudi"
}, {
  "name": "Nanon"
}, {
  "name": "Carrie"
}, {
  "name": "Ferguson"
}, {
  "name": "Lorenza"
}, {
  "name": "Wesley"
}, {
  "name": "Artus"
}, {
  "name": "Isaac"
}, {
  "name": "Immanuel"
}, {
  "name": "Florie"
}, {
  "name": "Pauly"
}, {
  "name": "Margalo"
}, {
  "name": "Luis"
}, {
  "name": "Jodee"
}, {
  "name": "Jarred"
}, {
  "name": "Edsel"
}, {
  "name": "Arly"
}, {
  "name": "Garald"
}, {
  "name": "Nicoli"
}, {
  "name": "Wendel"
}, {
  "name": "Eduino"
}, {
  "name": "Deidre"
}, {
  "name": "Fredek"
}, {
  "name": "Kendrick"
}, {
  "name": "Shaina"
}, {
  "name": "Purcell"
}, {
  "name": "Barbara"
}, {
  "name": "Lindon"
}, {
  "name": "Carrie"
}, {
  "name": "Ferne"
}, {
  "name": "Reginauld"
}, {
  "name": "Reed"
}, {
  "name": "Hadria"
}, {
  "name": "Tilly"
}, {
  "name": "Ree"
}, {
  "name": "Drud"
}, {
  "name": "Kellen"
}, {
  "name": "Gusty"
}, {
  "name": "Bridgette"
}, {
  "name": "Alverta"
}, {
  "name": "Felice"
}, {
  "name": "Stace"
}, {
  "name": "Carol-jean"
}, {
  "name": "Tarah"
}, {
  "name": "Ayn"
}, {
  "name": "Emmy"
}, {
  "name": "Abigale"
}, {
  "name": "Isabeau"
}, {
  "name": "Florri"
}, {
  "name": "Ula"
}, {
  "name": "Moreen"
}, {
  "name": "Hynda"
}, {
  "name": "Jemmy"
}, {
  "name": "Franz"
}, {
  "name": "Mariejeanne"
}, {
  "name": "Claudetta"
}, {
  "name": "Fiorenze"
}, {
  "name": "Padriac"
}, {
  "name": "Rinaldo"
}, {
  "name": "Joycelin"
}, {
  "name": "Judah"
}, {
  "name": "Richy"
}, {
  "name": "Melisenda"
}, {
  "name": "Agathe"
}, {
  "name": "Aubine"
}, {
  "name": "Roda"
}, {
  "name": "Mikaela"
}, {
  "name": "Berky"
}, {
  "name": "Nelie"
}, {
  "name": "Gerianne"
}, {
  "name": "Kaylee"
}, {
  "name": "Doretta"
}, {
  "name": "Laraine"
}, {
  "name": "Fonsie"
}, {
  "name": "Janet"
}, {
  "name": "Valencia"
}, {
  "name": "Ruprecht"
}, {
  "name": "Ealasaid"
}, {
  "name": "Cornie"
}, {
  "name": "Selia"
}, {
  "name": "Letty"
}, {
  "name": "Georgi"
}, {
  "name": "Berke"
}, {
  "name": "Jobye"
}, {
  "name": "Gay"
}, {
  "name": "Christie"
}, {
  "name": "Amos"
}, {
  "name": "Sholom"
}, {
  "name": "Donnie"
}, {
  "name": "Pippy"
}, {
  "name": "Sharla"
}, {
  "name": "Lise"
}, {
  "name": "Desiree"
}, {
  "name": "Hyacinthie"
}, {
  "name": "Kincaid"
}, {
  "name": "Tanya"
}, {
  "name": "Shanna"
}, {
  "name": "Gabi"
}, {
  "name": "Matthaeus"
}, {
  "name": "Ginnifer"
}, {
  "name": "Wang"
}, {
  "name": "Hebert"
}, {
  "name": "Kippie"
}, {
  "name": "Kinsley"
}, {
  "name": "Craggy"
}, {
  "name": "Kennith"
}, {
  "name": "Nariko"
}, {
  "name": "Dario"
}, {
  "name": "Jacquette"
}, {
  "name": "Augusto"
}, {
  "name": "Gustaf"
}, {
  "name": "Darlene"
}, {
  "name": "Beryle"
}, {
  "name": "Burton"
}, {
  "name": "Karoline"
}, {
  "name": "Godard"
}, {
  "name": "Gilles"
}, {
  "name": "Connie"
}, {
  "name": "Cly"
}, {
  "name": "Wash"
}, {
  "name": "Roma"
}, {
  "name": "Huntington"
}, {
  "name": "Lucio"
}, {
  "name": "Wylma"
}, {
  "name": "Timmie"
}, {
  "name": "Belicia"
}, {
  "name": "Leesa"
}, {
  "name": "Wilbur"
}, {
  "name": "Nicol"
}, {
  "name": "Gipsy"
}, {
  "name": "Dion"
}, {
  "name": "Doloritas"
}, {
  "name": "Taylor"
}, {
  "name": "Eugen"
}, {
  "name": "Olympe"
}, {
  "name": "Faydra"
}, {
  "name": "Nona"
}, {
  "name": "Kissee"
}, {
  "name": "Fulvia"
}, {
  "name": "Eugene"
}, {
  "name": "Marcus"
}, {
  "name": "Jeanne"
}, {
  "name": "Holt"
}, {
  "name": "Trent"
}, {
  "name": "Kattie"
}, {
  "name": "Jenica"
}, {
  "name": "Eva"
}, {
  "name": "Fidelity"
}, {
  "name": "Dianna"
}, {
  "name": "Lori"
}, {
  "name": "Jessamine"
}, {
  "name": "Tate"
}, {
  "name": "Angel"
}, {
  "name": "Maressa"
}, {
  "name": "Evan"
}, {
  "name": "Tome"
}, {
  "name": "Maurine"
}, {
  "name": "Melisent"
}, {
  "name": "Charley"
}, {
  "name": "Neilla"
}, {
  "name": "Gretchen"
}, {
  "name": "Mackenzie"
}, {
  "name": "Gallagher"
}, {
  "name": "Maurise"
}, {
  "name": "Koralle"
}, {
  "name": "Ilyssa"
}, {
  "name": "Laurent"
}, {
  "name": "Ranee"
}, {
  "name": "Judy"
}, {
  "name": "Salvidor"
}, {
  "name": "Bat"
}, {
  "name": "Rodrick"
}, {
  "name": "Estevan"
}, {
  "name": "Malchy"
}, {
  "name": "Cathlene"
}, {
  "name": "Letty"
}, {
  "name": "Jeri"
}, {
  "name": "Ferris"
}, {
  "name": "Armstrong"
}, {
  "name": "Renata"
}, {
  "name": "Gabi"
}, {
  "name": "Kasey"
}, {
  "name": "Kirk"
}, {
  "name": "Leontine"
}, {
  "name": "Ellen"
}, {
  "name": "Lavinie"
}, {
  "name": "Ulick"
}, {
  "name": "Gabriel"
}, {
  "name": "Jojo"
}, {
  "name": "Isidoro"
}, {
  "name": "Hetty"
}, {
  "name": "Fulvia"
}, {
  "name": "Vere"
}, {
  "name": "Christiane"
}, {
  "name": "Orion"
}, {
  "name": "Way"
}, {
  "name": "Fabiano"
}, {
  "name": "Corny"
}, {
  "name": "Nichole"
}, {
  "name": "Arny"
}, {
  "name": "Winfield"
}, {
  "name": "Keane"
}, {
  "name": "Myer"
}, {
  "name": "Fred"
}, {
  "name": "Jeanelle"
}, {
  "name": "Loy"
}, {
  "name": "Andrey"
}, {
  "name": "Thia"
}, {
  "name": "Cheryl"
}, {
  "name": "Reuven"
}, {
  "name": "Tammara"
}, {
  "name": "Jessamyn"
}, {
  "name": "Josey"
}, {
  "name": "Violante"
}, {
  "name": "Gustav"
}, {
  "name": "Lindsey"
}, {
  "name": "Elsi"
}, {
  "name": "Adolphus"
}, {
  "name": "Andie"
}, {
  "name": "Solly"
}, {
  "name": "Rudolph"
}, {
  "name": "Vite"
}, {
  "name": "Sula"
}, {
  "name": "Gauthier"
}, {
  "name": "Benji"
}, {
  "name": "Chrysa"
}, {
  "name": "Jamil"
}, {
  "name": "Paulette"
}, {
  "name": "Brita"
}, {
  "name": "Maxy"
}, {
  "name": "Winne"
}, {
  "name": "Orville"
}, {
  "name": "Crosby"
}, {
  "name": "Camille"
}, {
  "name": "Lek"
}, {
  "name": "Hyacinthia"
}, {
  "name": "Chancey"
}, {
  "name": "Salmon"
}, {
  "name": "Tedi"
}, {
  "name": "Ashli"
}, {
  "name": "Floris"
}, {
  "name": "Brit"
}, {
  "name": "Jacky"
}, {
  "name": "Tiebold"
}, {
  "name": "Irma"
}, {
  "name": "Patrizius"
}, {
  "name": "Sybil"
}, {
  "name": "Dru"
}, {
  "name": "Benji"
}, {
  "name": "Mandie"
}, {
  "name": "Davie"
}, {
  "name": "Cherry"
}, {
  "name": "Linette"
}, {
  "name": "Carri"
}, {
  "name": "Rebe"
}, {
  "name": "Ruben"
}, {
  "name": "Bendick"
}, {
  "name": "Elissa"
}, {
  "name": "Janel"
}, {
  "name": "Harriett"
}, {
  "name": "Fancy"
}, {
  "name": "Aldrich"
}, {
  "name": "Ninnetta"
}, {
  "name": "Crysta"
}, {
  "name": "Doralia"
}, {
  "name": "Atlante"
}, {
  "name": "Byrann"
}, {
  "name": "Nickey"
}, {
  "name": "Alwin"
}, {
  "name": "Abby"
}];
},{}],"src/lib/imitation/_data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NAMES = void 0;
var _names = _interopRequireDefault(require("../mock/names"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var NAMES = _names.default.map(function (_ref) {
  var name = _ref.name;
  return name;
});
exports.NAMES = NAMES;
},{"../mock/names":"src/lib/mock/names.json"}],"src/lib/imitation/helper.random.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGroupOfGuests = createGroupOfGuests;
exports.createRandomChildGuest = createRandomChildGuest;
exports.createRandomGroupOfGuests = createRandomGroupOfGuests;
exports.createRandomGuest = createRandomGuest;
exports.createRandomRoom = createRandomRoom;
exports.getIsProbable = getIsProbable;
exports.getRandomAge = getRandomAge;
exports.getRandomInRange = getRandomInRange;
exports.getRandomSecondsOfRent = getRandomSecondsOfRent;
var _constants = require("../constants");
var _helpers = require("../helpers.date");
var _helpers2 = require("../helpers.math");
var _data = require("./_data");
function getRandomInRange(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
function getIsProbable(probability) {
  var randomPercent = getRandomInRange(0, 100);
  return randomPercent <= probability;
}
function getRandomSecondsOfRent() {
  return getRandomInRange(10, 60);
}
function getRandomName() {
  var randomIndex = getRandomInRange(0, _data.NAMES.length - 1);
  return _data.NAMES[randomIndex];
}
function getRandomAge() {
  var maxAge = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.MAX_AGE;
  var minAge = maxAge <= _constants.MIN_AGE ? 1 : _constants.MIN_AGE;
  return (0, _helpers2.getRandomGaussValue)(minAge, maxAge);
}
function createRandomGuest() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    name: getRandomName(),
    age: getRandomAge(props.maxAge)
  };
}
function createRandomChildGuest() {
  return createRandomGuest({
    maxAge: 17
  });
}
function createRandomRoom() {
  return {
    guests: createRandomGuest(),
    whenLeave: (0, _helpers.getTimeOfRent)(getRandomSecondsOfRent())
  };
}

/*
  countOfGuests - number
*/
function createGroupOfGuests(props) {
  var guestsList = [];
  var prevIndexProbability = 0;
  for (var i = 0; i < props.countOfGuests; i++) {
    if (i === 0) {
      guestsList.push(createRandomGuest());
    } else {
      prevIndexProbability += 50 / Math.pow(2, i - 1);
      var isNextChild = getIsProbable(prevIndexProbability);
      if (isNextChild) {
        guestsList.push(createRandomChildGuest());
      } else {
        guestsList.push(createRandomGuest());
      }
    }
  }
  return guestsList;
}
function createRandomGroupOfGuests() {
  return createGroupOfGuests({
    countOfGuests: getRandomInRange(1, 5)
  });
}
},{"../constants":"src/lib/constants.js","../helpers.date":"src/lib/helpers.date.js","../helpers.math":"src/lib/helpers.math.js","./_data":"src/lib/imitation/_data.js"}],"src/lib/database.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHistoryOfGuests = createHistoryOfGuests;
exports.getHistoryOfGuestsFromDb = getHistoryOfGuestsFromDb;
exports.getOccupancyOfHotel = getOccupancyOfHotel;
exports.getRooms = getRooms;
exports.getRoomsFromDb = getRoomsFromDb;
exports.saveGuestsToHistoryDb = saveGuestsToHistoryDb;
exports.saveRoomsToDb = saveRoomsToDb;
exports.showHistory = showHistory;
exports.showTableOfRooms = showTableOfRooms;
var _constants = require("./constants");
var _helpers = require("./helpers");
var _helpers2 = require("./helpers.date");
var _helper = require("./imitation/helper.random");
function saveRoomsToDb(rooms) {
  localStorage.setItem(_constants.ROOMS_KEY, JSON.stringify(rooms));
}
function getRoomsFromDb() {
  var roomsString = localStorage.getItem(_constants.ROOMS_KEY);
  return !roomsString ? null : JSON.parse(roomsString);
}
function saveGuestsToHistoryDb(guests) {
  localStorage.setItem(_constants.HISTORY_OF_GUESTS, JSON.stringify(guests));
}
function getHistoryOfGuestsFromDb() {
  var guestsString = localStorage.getItem(_constants.HISTORY_OF_GUESTS);
  return !guestsString ? [] : JSON.parse(guestsString);
}
function createHistoryOfGuests(settledRoom) {
  var history = getHistoryOfGuestsFromDb();
  history.push(settledRoom);
  saveGuestsToHistoryDb(history);
}
function getRooms() {
  var rooms = getRoomsFromDb();
  if (!rooms) {
    return (0, _helpers.createEmptyHotel)();
  }
  return (0, _helpers.refreshHotelRooms)(rooms);
}
function getOccupancyOfHotel(extRooms) {
  var rooms = extRooms || getRooms();
  return rooms.reduce(function (acc, room) {
    if (room.guests) {
      acc++;
    }
    return acc;
  }, 0);
}
function showTableOfRooms() {
  var rooms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getRooms();
  var table = rooms.reduce(function (acc, room, index) {
    if (!room.guests) {
      return "".concat(acc, "The room ").concat(index + 1, "(").concat(room.capacity, ") is empty\n");
    }
    var formatedDate = (0, _helpers2.formatDateToReadable)(room.whenLeave);
    return "".concat(acc, "The room ").concat(index + 1, "(").concat(room.capacity, ") is renting by ").concat(room.guests[0].name, "(").concat(room.guests.length, ") until ").concat(formatedDate, "\n");
  }, "");
  console.log(table);
  var emptyRoom = (0, _helpers.findFirstEmptyRoom)(rooms);
  if (emptyRoom === -1) {
    console.log("There are no empty rooms!");
  }
}
function showHistory() {
  var history = getHistoryOfGuestsFromDb();
  var readableHistory = history.map(function (element, index) {
    var dateOfSettled = (0, _helpers2.formatDateToReadable)(element.whenSettled);
    var dateOfLeave = (0, _helpers2.formatDateToReadable)(element.whenLeave);
    var names = element.guests.reduce(function (acc, item) {
      acc.push(item.name);
      return acc;
    }, []).join(", ");
    if (element.guests.length === 1) {
      return "".concat(index + 1, ". The (").concat(element.guests.length, ") Guest: ").concat(names, ".\n    Rented Room ").concat(element.room, "\n    from: ").concat(dateOfSettled, "\n    to: ").concat(dateOfLeave, "\n");
    }
    return "".concat(index + 1, ". The (").concat(element.guests.length, ") Guests: ").concat(names, ".\n    Rented Room ").concat(element.room, "\n    from: ").concat(dateOfSettled, "\n    to: ").concat(dateOfLeave, "\n");
  }).join("\n");
  return console.log(readableHistory);
}
},{"./constants":"src/lib/constants.js","./helpers":"src/lib/helpers.js","./helpers.date":"src/lib/helpers.date.js","./imitation/helper.random":"src/lib/imitation/helper.random.js"}],"src/lib/imitation/randomInterval.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRandomInterval = createRandomInterval;
var _helper = require("./helper.random");
function setTimeoutWithRandomInterval(callback, from, to) {
  var interval = (0, _helper.getRandomInRange)(from, to);
  return setTimeout(callback, interval);
}
function createRandomInterval(callback, from, to) {
  var currentInterval;
  function setIntervalWithRandom() {
    currentInterval = setTimeoutWithRandomInterval(function () {
      callback();
      clearTimeout(currentInterval);
      setIntervalWithRandom();
    }, from, to);
  }
  function clearInterval() {
    clearTimeout(currentInterval);
  }
  return {
    start: setIntervalWithRandom,
    stop: clearInterval
  };
}
},{"./helper.random":"src/lib/imitation/helper.random.js"}],"src/lib/imitation/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addGroupToHotel = addGroupToHotel;
exports.createHotelImitation = createHotelImitation;
exports.createHotelStartPopulation = createHotelStartPopulation;
exports.hotelImitation = void 0;
var _constants = require("../constants");
var _database = require("../database");
var _helpers = require("../helpers.date");
var _helper = require("./helper.random");
var _randomInterval = require("./randomInterval");
require("./_data");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var ErrorCodes = {
  NO_EMPTY_ROOM: 1,
  NO_SUITABLE_ROOM: 2
};
function addGroupToHotel() {
  var rooms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _database.getRooms)();
  var group = (0, _helper.createRandomGroupOfGuests)();
  var whenLeave = (0, _helpers.getTimeOfRent)((0, _helper.getRandomSecondsOfRent)());
  var emptyRoomIndex = rooms.findIndex(function (room) {
    return !room.guests && room.capacity >= group.length;
  });
  if ((0, _database.getOccupancyOfHotel)(rooms) === _constants.COUNT_OF_ROOMS) {
    return {
      error: ErrorCodes.NO_EMPTY_ROOM,
      group: group
    };
  }
  if (emptyRoomIndex === -1) {
    return {
      error: ErrorCodes.NO_SUITABLE_ROOM,
      group: group
    };
  }
  rooms[emptyRoomIndex] = _objectSpread(_objectSpread({}, rooms[emptyRoomIndex]), {}, {
    guests: group,
    whenLeave: whenLeave
  });
  (0, _database.saveRoomsToDb)(rooms);
  return {
    rooms: rooms,
    settledIndex: emptyRoomIndex
  };
}
function createHotelStartPopulation() {
  var rooms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _database.getRooms)();
  if (rooms.findIndex(function (room) {
    return room.guests;
  }) !== -1) {
    return;
  }
  for (var i = 0; i < _constants.COUNT_OF_ROOMS; i++) {
    if ((0, _helper.getIsProbable)(30)) {
      addGroupToHotel();
    }
  }
}
function createHotelImitation() {
  createHotelStartPopulation();
  var prosessOfImitation = (0, _randomInterval.createRandomInterval)(function () {
    var _addGroupToHotel = addGroupToHotel(),
      rooms = _addGroupToHotel.rooms,
      error = _addGroupToHotel.error,
      group = _addGroupToHotel.group,
      settledIndex = _addGroupToHotel.settledIndex;
    if (error === ErrorCodes.NO_EMPTY_ROOM) {
      console.log("The are no epty rooms");
      return;
    }
    if (error === ErrorCodes.NO_SUITABLE_ROOM) {
      var names = group.map(function (_ref) {
        var name = _ref.name;
        return name;
      }).join(", ");
      console.log("There is no suitable room for the ".concat(group.length, " guests\n\n    ").concat(names));
      return;
    }
    var settledRoom = _objectSpread(_objectSpread({}, rooms[settledIndex]), {}, {
      whenSettled: Date.now(),
      room: settledIndex + 1
    });
    (0, _database.createHistoryOfGuests)(settledRoom);
    (0, _database.showTableOfRooms)(rooms);
  }, 1000, 2000);
  return prosessOfImitation;
}
var hotelImitation = createHotelImitation();
exports.hotelImitation = hotelImitation;
},{"../constants":"src/lib/constants.js","../database":"src/lib/database.js","../helpers.date":"src/lib/helpers.date.js","./helper.random":"src/lib/imitation/helper.random.js","./randomInterval":"src/lib/imitation/randomInterval.js","./_data":"src/lib/imitation/_data.js"}],"src/ui/common/button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createButton = createButton;
function createButton(props) {
  var button = document.createElement("button");
  if (props !== null && props !== void 0 && props.className) {
    button.classList.add(props.className);
  }
  if (props !== null && props !== void 0 && props.label) {
    button.innerText = props.label;
  }
  if (props !== null && props !== void 0 && props.onClick) {
    button.addEventListener("click", props.onClick);
  }
  return button;
}
},{}],"src/ui/common/block.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBlock = createBlock;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function createBlock(props) {
  var block = document.createElement("div");
  if (props !== null && props !== void 0 && props.className) {
    block.classList.add(props.className);
  }
  if (props !== null && props !== void 0 && props.children) {
    block.append.apply(block, _toConsumableArray(props.children));
  }
  return block;
}
},{}],"src/ui/StatefulButton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatefulButton = void 0;
var _button = require("./common/button");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
//label - это тeперь функция
var StatefulButton = /*#__PURE__*/function () {
  //state: boolean
  //label

  function StatefulButton(props) {
    var _this = this;
    _classCallCheck(this, StatefulButton);
    this.state = false;
    this.onClick = props.onClick;
    this.label = props.label;
    this.activeClassName = (props === null || props === void 0 ? void 0 : props.activeClassName) || "";
    this.entity = (0, _button.createButton)(_objectSpread(_objectSpread({}, props), {}, {
      label: props.label(this.state),
      onClick: function onClick() {
        return _this.toogle();
      }
    }));
  }
  _createClass(StatefulButton, [{
    key: "toogle",
    value: function toogle() {
      this.state = !this.state;
      this.onClick(this.state);
      this.entity.innerText = this.label(this.state);
      if (this.state && this.activeClassName) {
        this.entity.classList.add(this.activeClassName);
      }
      if (!this.state && this.activeClassName) {
        this.entity.classList.remove(this.activeClassName);
      }
    }
  }]);
  return StatefulButton;
}();
exports.StatefulButton = StatefulButton;
},{"./common/button":"src/ui/common/button.js"}],"src/ui/imitationController.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createImitiationController = createImitiationController;
var _imitation = require("../lib/imitation");
var _database = require("../lib/database");
var _button = require("./common/button");
var _block = require("./common/block");
var _StatefulButton = require("./StatefulButton");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function createRow(props) {
  return (0, _block.createBlock)(_objectSpread(_objectSpread({}, props), {}, {
    className: "row"
  }));
}
function createImitiationController() {
  var app = document.getElementById("app");
  var imitiationToggleButton = new _StatefulButton.StatefulButton({
    label: function label(state) {
      if (state) return "Stop";
      return "Start";
    },
    className: "button",
    activeClassName: "active-button",
    onClick: function onClick(state) {
      if (state) return _imitation.hotelImitation.start();
      _imitation.hotelImitation.stop();
    }
  });
  var showHistoryButton = (0, _button.createButton)({
    className: "button",
    label: "Show History",
    onClick: _database.showHistory
  });
  var row = createRow({
    children: [imitiationToggleButton.entity]
  });
  var row1 = createRow({
    children: [showHistoryButton]
  });
  var container = (0, _block.createBlock)({
    className: "imitation-controller",
    children: [row, row1]
  });
  app.appendChild(container);
}
},{"../lib/imitation":"src/lib/imitation/index.js","../lib/database":"src/lib/database.js","./common/button":"src/ui/common/button.js","./common/block":"src/ui/common/block.js","./StatefulButton":"src/ui/StatefulButton.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _dd = require("./dd");
var _constants = require("./lib/constants");
var _imitation = require("./lib/imitation");
var _button = require("./ui/common/button");
var _imitationController = require("./ui/imitationController");
_imitation.hotelImitation.stop();
(0, _imitationController.createImitiationController)();
console.log("AAAAAAAAAAAAAA");
console.log("BBBBBBBBBBBBBB");
},{"./dd":"src/dd.js","./lib/constants":"src/lib/constants.js","./lib/imitation":"src/lib/imitation/index.js","./ui/common/button":"src/ui/common/button.js","./ui/imitationController":"src/ui/imitationController.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45631" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map