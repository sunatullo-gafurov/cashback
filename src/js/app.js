const regularPurchases = 2000;
const regularPurchasesPercent = 0.01;

const increasedPurchases = 10000;
const increasedPurchasesPercent = 0.05;

const specialPurchase = 100;
const specialPurchasePercent = 0.03;

let cashback = regularPurchases * regularPurchasesPercent + increasedPurchases * increasedPurchasesPercent + specialPurchase * specialPurchasePercent;
const cashbackLimit = 3000;
if (cashback > cashbackLimit) {
    cashback = 2000;
}
console.log(cashback);