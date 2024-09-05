/// arrays methods

//filter mthod

//1
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(function(num) {
//   return num % 2 === 0;
// });
// console.log(evenNumbers); // Output: [2, 4, 6]

//2

// const numbers = [10, 15, 20, 25, 30];
// const oddNum= numbers.filter(function(num){
//     return num%2 != 0
// })
// console.log(oddNum);

//3

// const words = ["hi", "hello", "hey", "goodbye"];
// const fWords= words.filter(function(word){
//     return word.length>3
// })
// console.log(fWords)

//4
const people = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 16 },
    { name: "David", age: 22 }
  ];

const   agePeople= people.length