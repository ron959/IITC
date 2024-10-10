//Asynchronous and Synchronous Programming Exercises

//2
// console.log('start');
// setTimeout(() =>{
//     console.log('end');
    
// }, 1000)
// console.log('hello world');

//3
//
// setTimeout(() => {
//     console.log('waiting...');
// }, 2000);

//4


// for(let i=1; i<=3; i++){
//     let time= 1000
//     time *= i
//     setTimeout(()=> {
//      console.log(i++);
        
//   }  , time)}

//7
// console.log('start');
// setTimeout(()=> {
//     console.log('end');
    
// }, 1000)

//8
// setTimeout(() => {
//     console.log('first');
    
// }, 1000);
// setTimeout(() => {
//     console.log('secound');
    
// }, 2000);

// setTimeout(() => {
//     console.log('third');
    
// }, 3000);






//call back funtion

//2

// function greet(name, callback) {
//     callback(name);
// }

// function sayGreeting(name) {
//     console.log(`Hello, ${name}!`);
// }

// greet("Alice", sayGreeting); // Output: Hello, Alice!

//4

// function call(num1, num2, callback){
//     callback(num1, num2)
// }
// function multi(num1,num2){
//     console.log(num1*num2);
    
// }
// call(3,5,multi)

//5
// const num=[2, 4, 6]

// function call(arr, ind, callback){
//     return callback(arr, ind)
// }
// function print(arr, ind){
//    return arr[ind]
// }    
// for(i=0; i<3; i++){
//     console.log(call(num, i, print))
// }
































//api
// fetch('https://images.dog.ceo/breeds/spitz-indian/Indian_Spitz.jpg')







    
    
