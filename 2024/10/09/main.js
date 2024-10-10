// // Function to fetch data from an API using fetch and Promises
// function fetchDataFromAPI(url) {
//     return new Promise(function(resolve, reject) {
//       // Initiate the fetch request
//       fetch(url)
//         .then(function(response) {
//           // Check if the response is OK (status 200-299)
//           if (response.ok) {
//             return response.json(); // Convert response to JSON
//           } else {
//             reject("Error: " + response.statusText); // Reject if response is not OK
//           }
//         })
//         .then(function(data) {
//           // Successfully received and parsed the JSON data
//           resolve(data); // Resolve the promise with the data
//         })
//         .catch(function(error) {
//           // Handle any errors that occurred during the fetch
//           reject("Network Error: " + error); // Reject the promise if fetch failed
//         });
//     });
//   }
  
//   // Usage example: Calling the function to fetch data from a public API
//   fetchDataFromAPI('https://jsonplaceholder.typicode.com/posts')
//     .then(function(data) {
//       console.log("Fetched data:", data); // Logs the fetched data from the API
//     })
//     .catch(function(error) {
//       console.error("Error fetching data:", error); // Logs any errors that occurred
//     });
  
//Async js & Promises
//1
// const myPromise = new Promise((resolve, reject) => {
//     resolve("Hello, World!");
// });

// // Consuming the promise
// myPromise.then(value => {
//     console.log(value); 
// });

//2
// const myPromise=new Promise((resolve, reject) => {
//     reject('error, world')
// })

// myPromise.catch(value=>{
//     console.error(value)}
    
// )

//3
// const myPromise= new Promise((resolve, reject) => {
//     setTimeout(function(){
//         resolve('resolved!')
//     },2000)
// })
// myPromise.then(value => {
//     console.log(value);
    
// })

//4
// const myPromise= new Promise((resolve, reject) => {
//     setTimeout(function(){
//     reject('rejected!')
// }, 1000)})

// myPromise.catch(value =>{
//     console.error('rejected');
    
// })

//5
// let someValue= true

// const myPromise= new Promise((resolve, reject) => {
//     if(someValue){
//         resolve(someValue)
//     }
// })

// myPromise.then(value =>{
//     console.log(someValue);
    
// })

//6

// const someValue= false

// const myPromise= new Promise((resolve, reject) => {
//     if(someValue){
//         resolve('true')
//     }
//     else{
//         reject(someValue)
//     }
// })

// myPromise.catch(value =>{
// console.log(someValue);

// })

//7
// let someValue= 'hello, world'

// const myPromise= new Promise((resolve, reject) => {
//     if(someValue){
//         resolve(someValue)
//     }
// })

// myPromise.then(value =>{
//     someValue= 'Promise Resolved'
//     console.log(someValue);
    
// })

//10
// const myPromise= new Promise((resolve, reject) => {
//     setTimeout(()=>
//     resolve('3 seconds passed')    
//     ,3000)
// })

// myPromise.then(value=>{
//     console.log(value);
// }
// )

//11
const myPromise=  new Promise((resolve, reject) => {
    resolve(
        const innerPromise = new ( );
    )
})