// function sayHello() {
//   alert(this.name);
// }

// function Person(name,age){
//  console.log(this)

// }

// Person.prototype.sayHello = sayHello

// const man1 = new Person()
// const man2 = new Person('Alex',30)

// class SomeDataDto {
//   constructor(props) {
//     this.foo = props;
//     this.bus = props;
//   }
// }

// const data = {
//   'somes': {
//     'id': 213123213,
//     'text': "Hello",
//   },
//   'somew': {
//     'isRe': true,
//     'id': 228,
//     'someNull': null,
//     'text': "some text",
//   },
// };

// const b = new SomeDataDto(data);
// console.log(b);

// ///////////////////////////// ///////////////////////////////////////////////////////////

// let hamster = {
//   stomach: [],

//   eat(food) {
//     // присвоение значения this.stomach вместо вызова this.stomach.push
//     this.stomach = [...this.stomach,food]
//   }
// };

// let speedy = {
//    __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// // Шустрый хомяк нашёл еду

// console.log(speedy.stomach)
// console.log(lazy.stomach)

// // Живот ленивого хомяка пуст

// function defer(ms){
//   const func = this;

//   return function(...arg){
//   setTimeout(()=> func.apply(this, arg),ms)

//   }
// }

// function f(a, b) {
//   alert( a + b );
// }

// Function.prototype.defer = defer;

// f.defer(1000)(1, 2);

function Man(name) {
  this.name = name;
}
function say() {
  console.log(this.name);
}

const man = new Man("Gleb");

man.__proto__.say = say;
