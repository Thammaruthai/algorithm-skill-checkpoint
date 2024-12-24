function findProductPrice(products, name) {
  // Your code here
  // sorted array
  // use the binary search algorithm because of determind by notion question.
  let start = 0;
  let end = products.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (products[mid].name === name) {
      return products[mid].price;
    } else if (products[mid].name < name) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
