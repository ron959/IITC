// let person= {
// firtstName: "ron",
// age: 21,
// isStudent: true,
// }

// console.log(person.firtstName);
// console.log(person.age);
// person.isStudent = false
// console.log(person);


// let pc= {
//     Processor: "i7",
//     graphic: "rtx 4060",
//     screen: "17 inch"
//}

// let car={
//     make: "toyota",
//     model: "corola",
//     year: 2015,
// }
// car.year= 2020
// console.log(car);

// let fruits={
//     fName: "mango",
//     color:"orenge",
//     sweetness: 7
// }

// console.log(fruits.fName);
// console.log(fruits.color);
// fruits.sweetness=4
// console.log(fruits);

// let book = {
//     title: "secret of life",
//     author: "r.sherling",
//     page: 50
// }
// console.log(book.title);
// console.log(book.author);
// book.page +=50
// console.log(book);

// let animal = {
// species: "lion",
// sound: "rawr",
// isWild: true,
// }
// console.log(animal.species);
// console.log(animal.sound);
// animal.isWild= false
//console.log(animal);

// let car = {
    // make: "toyota",
    // model: "corola",
    // year: 2005,
    // print: function (){
    //     if(typeof keys!== "function"){
    //     console.log(`${car.make}, ${car.model}, ${car.year}`);}
    // }
    
//}
//console.log(car.model);
//car.year= 2020
// console.log(car);
// //car.print()
// let keys=  Object.keys(car)
// let values=  Object.values(car)

//      for(let i=0; i < values.length; i++){
//         console.log(`${keys[i]} : ${values[i]}`);
//         }
let str = 'hello world';
let vowels = 'aeiou';
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i]=== 'o' || str[i] === 'u')
  count++
}
console.log(count);