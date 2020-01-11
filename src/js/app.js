const regularPurchases = 2000;
const regularPurchasesPercent = 0.01;

const increasedPurchases = 5000;
const increasedPurchasesPercent = 0.05;

const specialPurchases = 9000;
const specialPurchasesPercent = 0.3;

let cashback = 0;
let cashbackLimit = 3000;

let category = {
    regular: regularPurchases * regularPurchasesPercent,
    increased: increasedPurchases * increasedPurchasesPercent,
    special: specialPurchases * specialPurchasesPercent
};

for (let purchase in category) {
    cashback += category[purchase];
}

if (cashback >= cashbackLimit) {
    console.log(3000);
} else {
    console.log(cashback);
}