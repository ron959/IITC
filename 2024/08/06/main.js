// const student_1 = {
//     name: "John",
//     age: 17,
//     grades: {},
//   };



// // 😅 Task 1: Update Student Age 😅
// // TODO: Write a function to update the student's age (You can mutate the original object)
// function updateAge(student_1, newAge) {
// student_1.age=newAge
// }
// updateAge(student_1, 18);
// // console.log("Updated Student:", student_1);





// ///2


// const product_1 = {
//     name: "Phone",
//     categories: ["electronics"],
//     isAvailable: false,
//   };
  
// // 😅 Task 2: Add Product Category 😅
// // TODO: Write a function to add a new category to the product (You can mutate the original object)
// function addCategory(product_1, category) {
// product_1.categories.push(category)
// }
  
  
//   addCategory(product_1, "gadgets");
// //   console.log("Updated Product:", product_1);





// /////3



//   // 😅 Task 3: Check Product Availability 😅
// // TODO: Write a function to check if the product is available (return true if available, false otherwise)
// function isProductAvailable(product) {
// if(product.isAvailable === true){
//     return true
// }
// else{
//     return false
// }

// }
  
  
//   const isAvailable = isProductAvailable(product_1);
// //   console.log("Is Product Available:", isAvailable);






// ///4




// // 🙂 Task 4: Find Product by Name 🙂
// // TODO: Write a function to find a product by name
// function findProductByName(products, productName) {

//     for(let i=0; i<myProducts.length; i++){
//         if(myProducts[i][productName]= myProducts[i].name){
//             productName= myProducts[i]
//         }
//     }
// return productName
//   }


// const foundProduct = findProductByName(myProducts, "Phone");
// // console.log("Found Product:", foundProduct);




// ////5


// // 🙂 Task 5: Count Products in Category 🙂
// // TODO: Write a function to count the number of products in a category
// // function countProductsInCategory(products, category) {
// //    let count= 0
// //     category= myProducts[i].categories
// //     for(let i=0; i<myProducts.length; i++){
// //         category= myProducts[i].categories
// //         for(let j=0; j<myProducts[i].categories; j++){
// // if(!count=== category[j] ){
// //     count++
// // }
// //     }
// // }
// // return count
// // }
  
  
// //   const count = countProductsInCategory(myProducts, "electronics");
// //   console.log("Products in Electronics:", count);
  

//   ////6

//   const students = [
//     { id: 1, name: "Alice", age: 20 },
//     { id: 2, name: "Bob", age: 22 },
//     { id: 3, name: "Charlie", age: 19 },
//   ];


//   // 🙂 Task 6: Get Student Ages 🙂


// // TODO: Write a function to get an array of student ages
// function getStudentAges(students) {
//     let agesArr= []
// for(let i=0; i<students.length; i++){
//     let ages= students[i].age
//     agesArr.push(ages)
// }
// return agesArr
// }
  
  
//   const ages = getStudentAges(students);
// //   console.log("Student Ages:", ages);





//   console.log(myProducts[0].categories[0]);
  
// // 🤨 Task 7: Get Products by Category 🤨
const myProducts = [
    { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
    { name: "Shirt", price: 500, categories: ["clothing"] },
    { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
  ];
// TODO: Write a function to get products by category
function getProductsByCategory(products, category) {

for(let i=0; i<myProducts.length; i++){
    let category= myProducts[i].categories
    for(let j=0; j<category.length; j++){
        if(category[j] === category)
    }
}
}
  
  
  const electronics = getProductsByCategory(myProducts, "electronics");
  // console.log("Electronics Products:", electronics);





// ////8











// ///////9

// // 🤨 Task 9: Add Grade to Student 🤨
// // TODO: Write a function to add a grade to a student (You can mutate the original object)

const student = {
    name: "John",
    age: 17,
    grades: {},
  };
  
function addGrade(student, subject, grade) {
    student.grades[subject]=grade
  }
  addGrade(student, "math", 85);
// console.log("Updated Student:", student);


///10
const strings = [
    "baba",
    "my success",
    "no more lives",
    "and of session",
    "good discussion",
  ];
  
// 😥 Task 10: Count Occurrences of a Character 😥
// TODO: Write a function to count the occurrences of the character 's'
function countCharacterOccurrences(strings, char) {
count=0
for(let i=0; i<strings.length; i++)
    for(let j=0; j<strings[i].length; j++){
if(!strings[i].includes([strings[i][j]])===strings[i][j] ){
    char=strings[i][j]
    count=1
}
else{
    count++
}
}
return count
}

  const s_count = countCharacterOccurrences(strings, "s");
const c_count = countCharacterOccurrences(strings, "c");
// console.log("Occurrences of 's':", s_count);
// console.log("Occurrences of 'b':", c_count);




//////

const myProducts = [
    { name: "Laptop", price: 1000, categories: ["electronics", "computers"] },
    { name: "Shirt", price: 500, categories: ["clothing"] },
    { name: "Phone", price: 4200, categories: ["electronics", "gadgets"] },
  ];




// 😥 Task 11: Update Product Price by Name 😥
// TODO: Write a function to update the price of a product by name (You can mutate the original object)
function updatePriceByName(products, productName, newPrice) {
    for()
productName= myProducts[]
}

