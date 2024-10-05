// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number) {
//   console.log(number * 2);  // Prints each number multiplied by 2
// });


let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

fruits.forEach(function(fru){
    console.log(fru);
    
}
)

// let numbers = [10, 20, 30, 40, 50];
// let count= 0
// numbers.forEach(function(num, i){
//     count += num ;
// })
// console.log( count);

let words = ["hello", "world", "javascript", "forEach"];

words.forEach(function(word) {
    console.log(word.toUpperCase());
  });


  let count= 0
let randomNumbers = [1, 4, 7, 10, 15, 20, 23, 30, 42];
randomNumbers.forEach(function(number){
    if(number%2 === 0){
        count += 1
    }
    
})
console.log(count);