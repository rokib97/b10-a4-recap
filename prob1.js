function calculateProfitTax(sales, costs) {
  if (sales < 0 || costs < 0 || sales < costs) {
    return "Invalid Input";
  }

  let profit = sales - costs;
  // 15/100 = 0.15 * 10000
  let tax = profit * 0.15;
  return tax;
}

const result = calculateProfitTax(15000, 5000);
console.log(result);
