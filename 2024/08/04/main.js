// let students= [
//     {id: "1", name: "omer", grade: 100},
//     {id: "2", name: "avi", grade: 40},
//     {id: "3", name: "gaga", grade: 80},
// ];

// function getValuesFromKey(array, key){
//     for(i=0; i<students.length; i++)
//         let array = students.
//     console.log(array);
    
        
// }

// getValuesFromKey(array)


//good one
// function getPassStudents(array, grade){
//     let newArray= []
// for(i=0; i<array.length; i++){
//     if(array[i]["grade"]>grade){
//         newArray.push(array[i])
//     }
// }
// return newArray;
// }
// console.log(getPassStudents(students, 50));



// function getValuesFromKey(array, key){
//     let newArray= []

//     for(let i=0; i<array.length; i++){
//         newArray.push(array[i][key]);
//     }
//     return newArray
// }
// console.log(getValuesFromKey);



// let personsNames= ["yossi", "liraz", "baba"]
// let persons= []
// function createPersons(names){
// for(i=0; i<personsNames.length; i++){
//     persons.push(personsNames[i]["name:"])
// }
// return ("name:", persons)

// }
// console.log(createPersons(personsNames));



/* 
  Write a function "groupBy" that takes 
  an array of objects and a key.
  returns an object where each key is a unique value 
  from the employees array and the corresponding value 
  is an array containing the employees that belong to that key.
  Example:
*/
// let employees = [
//     { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
//     { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
//     { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
//     { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
//     { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
//     { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
//   ];
  
//   console.log(groupBy(employees, "department"));
  
//   function groupBy(array, key) {
//     let group = {};
//     for(let i=0; i<array.length; i++){
//         if(array[i][key] === "Engineering"){
//             let EngineeringGroup =group.push(array[i])}
//         }
//         return ("Engineering", EngineeringGroup)

//         else{
//             MarketingGroup
//             group.push(array[i][key])}
//         }
//     }
  
//     return group;
//   }
//   console.log(groupBy,"department");
  
  
  /*
  {
    Engineering: [
      { name: 'John Doe', department: 'Engineering', yearsOfExp: 5 },
      { name: 'Peter Johnson', department: 'Engineering', yearsOfExp: 5 },
      { name: 'Mike Davis', department: 'Engineering', yearsOfExp: 3 }
    ],
    Marketing: [
      { name: 'Jane Smith', department: 'Marketing', yearsOfExp: 8 },
      { name: 'Lucy Brown', department: 'Marketing', yearsOfExp: 10 },
      { name: 'Sara Wilson', department: 'Marketing', yearsOfExp: 8 }
    ]
  }
  */

  // home work

//1
// let person = {
//     name: "John",
//     age: 17,
//     address: {
//       city: "New York",
//       zip: "10001",
//     },
//   };
  
//   function updateCity(person, newCity){
//     let updatedPerson
//     person.address.city= newCity
//   }
//   updateCity(person, "Los Angeles");
// console.log("Updated Person:", person);
  

  //2


// let students = [
//   { id: 1, name: "Alice", age: 20 },
//   { id: 2, name: "Bob", age: 22 },
//   { id: 3, name: "Charlie", age: 19 },
// ];

// function getStudentNames(students){
//     let studentsArr= []
//     for(i=0; i<students.length; i++){
//     studentsArr.push(students[i].name)
// }
// return studentsArr
// }

// console.log( getStudentNames(students));


let products = [
    { name: "Laptop", price: 1000, sizes: ["M", "L"], isAvailable: true },
    { name: "Mouse", price: 2500, sizes: ["S", "M"], isAvailable: false },
    { name: "Keyboard", price: 52, sizes: ["L", "XL"], isAvailable: true },
  ];
  
//   // TODO: Write a function to find the most expensive product
//     // your code here

//     function findMostExpensiveProduct(products){
//         let maxPrice= products[0].price
//         let maxIndex=0
//     for(let i=0; i<products.length; i++){
//         let currentPrice= products[i].price;
//         if(currentPrice>maxPrice){
// maxPrice= currentPrice
// maxIndex= i
//         }}

// return products[maxIndex]
//     }   
//     console.log(findMostExpensiveProduct(products));

// function getAvailableSizes(products){
//     let sizes= [];
    
//     for(let i=0; i<products.length; i++){
//         if(products[i].isAvailable){
//             for(let j=0; j< products[i].sizes.length; j++){
//                 if(!sizes.includes(products[i].sizes[j])){
//                     sizes.push(products[i].sizes[j])
//                 }
//             }
//         }
//     }
//     return sizes
//     }
//     console.log(getAvailableSizes(products));
    

/////////////////////////////////////////////////////

let student = {
    name: "Alice",
    age: 20,
  };
  
  
  
  // TODO: Write a function to add a new property to the student object
//   function addProperty(student, key, value) {
//     student[key]= value
//     return student
// }

// console.log(addProperty(student,"grade", "a" ));


//   // addProperty(student, "grade", "A");
//   // console.log("Updated Student:", student);
   


////////////////



// let school = {
//     name: "Greenwood High",
//     address: {
//       city: "Springfield",
//       zip: "12345", },
//     students: [
//       { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
//       { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
//     ],
//   };

//   console.log(school.students[0].grades.english);
  
//   // TODO: Write a function to update a student's grade in a subject
//   function updateStudentGrade(school, studentId, subject, newGrade) {
//     for(i=0; i<school.students.length; i++){
//         let student= school.students[i]
//         if(student.id === studentId){
//             student.grades[subject]= newGrade
//     }
//   }
// }
// updateStudentGrade(school, 1, "math", 90);
//   console.log("Updated School:", school);

//////////


// let orders = [
//     { id: 1, product: "Laptop", status: "delivered" },
//     { id: 2, product: "Mouse", status: "pending" },
//     { id: 3, product: "Keyboard", status: "delivered" },
//     { id: 4, product: "Monitor", status: "pending" },
//     { id: 5, product: "Laptop", status: "shipped" },
//   ];
  
//   // TODO: Write a function to return an array of only delivered orders
//   function getDeliveredOrders(orders) {
//     let deliveredOrders= []
// for(let i=0; i<orders.length; i++){
//     if(orders[i].status === "delivered"){
//         deliveredOrders.push(orders[i])
//     }
// }
// return deliveredOrders
//   }
  
//   let deliveredOrders = getDeliveredOrders(orders);
//   console.log("Delivered Orders:", deliveredOrders);
  
  // TODO: Write a function to count the occurrences of each product in the orders
  function countProductOccurrences(orders) {
let count= []
for(let i=0; i<orders.length; i++){
    if(!count.includes(orders[i].product))
    for(let j=0; j<orders.length; j++){
      if(  orders[i].product===orders[i].product){
        count.push(orders[i].product)
        count.orders[i].product= count++
      }
    }    
    }
    return  count
}


  
   let productCounts = countProductOccurrences(orders);
   console.log("Product Counts:", productCounts);
  
    // Output:
    // {
    //   Laptop: 2,
    //   Mouse: 1,
    //   Keyboard: 1,
    //   Monitor: 1
    // }
    // */