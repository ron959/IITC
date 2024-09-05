


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

//2. Filtering Strings (Easy)
//Task: Given an array of strings, return a new array containing only the strings that have more than 5 characters.
const words = ["apple", "banana", "pear", "grape", "watermelon"];
const fiveChar= words.filter(word=> word.length>5)
console.log(fiveChar);

//3
// Task: Given an array of objects representing people, return a new array containing only the people who are over 18 years old.
const people = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
    { name: "David", age: 15 }
];
const adults= people.filter(Lage=> Lage.age>18)
console.log(adults);

//4
// Task: Given an array of arrays (matrix), return a new array containing only the sub-arrays that have at least one negative number.
const matrix = [
    [1, 2, 3],
    [-1, 0, 2],
    [5, 6, 7],
    [-3, 8, -2]
];

const NegArr= matrix.filter(SubArr=> SubArr.some(num=> num<0))
console.log(NegArr);

//Exercise: Filter Out Items Based on Conditions

const shoppingCart = [
    { name: "Laptop", price: 1200, tags: ["electronics", "work"] },
    { name: "Book", price: 20, tags: ["education", "leisure"] },
    { name: "Toy", price: 15, tags: ["kids", "fun"] },
    { name: "Smartphone", price: 800, tags: ["electronics", "restricted"] },
    { name: "Headphones", price: 50, tags: ["electronics", "music"] },
    { name: "Wine", price: 30, tags: ["beverage", "restricted"] },
];

const LessHun= shoppingCart.filter(
    Obj=> Obj.price<100 && !Obj.tags.some(tag=> tag === 'restricted'))
console.log(LessHun);



const employees = [
    { name: "John", age: 28, skills: ["JavaScript", "React"], isFullTime: true },
    { name: "Sarah", age: 34, skills: ["Java", "Spring", "obsolete"], isFullTime: true },
    { name: "Michael", age: 25, skills: ["Python", "Django"], isFullTime: false },
    { name: "Anna", age: 30, skills: ["JavaScript", "Node.js"], isFullTime: true },
    { name: "Tom", age: 45, skills: ["C#", "ASP.NET", "obsolete"], isFullTime: true },
    { name: "Laura", age: 32, skills: ["JavaScript", "React", "Redux"], isFullTime: false },
];
//Task Description:
// Filter out employees who have the skill "obsolete".
// Filter out employees who are not full-time workers (isFullTime is false).

const newEmp= employees.filter(
    subObj=> subObj.isFullTime === false && !subObj.skills.some( skill=> skill ==='obsolete')
)
console.log(newEmp);



//5
const products = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Mouse", price: 20, inStock: true },
    { name: "Keyboard", price: 50, inStock: false },
    { name: "Monitor", price: 80, inStock: true },
    { name: "USB Cable", price: 10, inStock: true }
];
// Output: [{ name: "Mouse", price: 20, inStock: true }, { name: "Monitor", price: 80, inStock: true }, { name: "USB Cable", price: 10, inStock: true }]
//Task: Given an array of objects representing products, return a new array containing only the products that are in stock and have a price below $100.

const NewPro= products.filter(SubObj=> SubObj.price<100 && SubObj.inStock === true)
console.log(NewPro);

const calcAverage= (a, b, c)=>(a+b+c)/3

//task 2
const scoreDolphins = calcAverage(44, 23, 71)
const  scoreKoalas= calcAverage(44, 23, 71)

//task 3
const checkWinner= Function(avgDolphins,avgKoalas){
    if((2*avgKoalas)>=avgDolphins){
        console.log("Koalas win ${avgDolphins} vs ${avgKoalas}")
    }
    else if(avgKoalas<=(2*avgDolphins))
    {
        console.log("Dolphins win (${avgDolphins} vs ${avgKoalas}")
    }
    else return console.log('no one win')
}
checkWinner(scoreDolphins,scoreKoalas)