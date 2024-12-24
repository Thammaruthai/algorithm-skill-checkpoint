function sortProductsByPrice(products) {
  // Your code here
  // bubble sort
  for (let i = 0; i < products.length; i++) {
    for (let j = 1; j < products.length-i; j++) {
      // console.log(`i: ${i}, j: ${j}`);
      // console.log(products[j - 1].price, products[j].price);

      if (products[j - 1].price > products[j].price) {
        let temp = products[j - 1];
        products[j - 1] = products[j];
        products[j] = temp;
        console.log("swap");
      }
    }
    // console.log("===========");
    
  }

  return products;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
