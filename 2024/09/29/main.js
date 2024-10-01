// const products = [
//     { name: 'Laptop', price: 4000, quantity: 10 },
//     { name: 'Smartphone', price: 2000, quantity: 5 },
//     { name: 'Headphones', price: 150, quantity: 0 }, // This product is out of stock
//     { name: 'Monitor', price: 800, quantity: 7 },
//     { name: 'Keyboard', price: 100, quantity: 3 },
//     { name: 'Smartwatch', price: 1800, quantity: 0 } // Another product out of stock
//   ];

//   const indexOutOfStock = products.find(product => product.quantity === 0);
//   console.log(indexOutOfStock);

const students = [
    { name: 'David', averageGrade: 85 },
    { name: 'Sara', averageGrade: 90 },
    { name: 'Michael', averageGrade: 85 },
    { name: 'John', averageGrade: 75 },
    { name: 'Anna', averageGrade: 90 },
    { name: 'Ben', averageGrade: 95 }
  ];

const highestAver= (a,b) => b.averageGrade -a.averageGrade
orderByAvg= students.sort(highestAver)


console.log(orderByAvg);
