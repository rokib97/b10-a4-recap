function checkDiscountEligibility(input) {
  // { "productPrice": 60, "isVIPCustomer": true, "purchaseQuantity": 4 }

  //   console.log(input);
  if (typeof input !== "object") {
    return "Invalid Input";
  }
  let myBank = 0; // 100
  if (input.productPrice > 50) {
    myBank += 100;
  }
  if (input.isVIPCustomer) {
    myBank += 50;
  }
  if (input.purchaseQuantity >= 3) {
    myBank += 25;
  }
  return myBank >= 150;
}

const result = checkDiscountEligibility({
  productPrice: 60,
  isVIPCustomer: true,
  purchaseQuantity: 4,
});
console.log(result);

// SAMPLE INPUT
// { "productPrice": 60, "isVIPCustomer": true, "purchaseQuantity": 4 }

// SAMPLE OUTPUT
// true

// SAMPLE INPUT
// { "productPrice": 45, "isVIPCustomer": false, "purchaseQuantity": 2 }
// false

// SAMPLE INPUT
// "hello"

// SAMPLE OUTPUT
// Invalid Input

// SAMPLE INPUT
// { "productPrice": 55, "isVIPCustomer": true, "purchaseQuantity": 2 }
// SAMPLE OUTPUT
// true
