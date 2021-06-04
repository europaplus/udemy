'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
//
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         function shout() {
//             console.log(this);
//         }
//     }
// }
//
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log("Hello!  " + this.name);
//     }
// }
//
// let ivan = new User('Ivan', 23);
// ivan.hello();

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
//
// const user = {
//     name: 'John',
// }
//
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);
//
// function count(num) {
//     return this.name + num;
// }
//
// const double = count.bind(user);
//
// console.log(double(3));

// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструктарах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind