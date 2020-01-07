const regularPurchases = 20000;
const regularPurchasesPercent = 0.01;
let cashback = regularPurchases * regularPurchasesPercent;
const cashbackLimit = 3000;
if (cashback > cashbackLimit) {
    cashback = 2000;
}
console.log(cashback);