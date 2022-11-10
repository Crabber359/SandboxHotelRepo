export function getElement() {}
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

const p = document.querySelectorAll("p");
// console.log(p);
// console.log("IS ARRAY", Array.isArray(p));
p.forEach((element) => {
  console.log("FOREACH", this); // изначально window по клику становится <p>
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
