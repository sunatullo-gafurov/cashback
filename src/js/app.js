const REGULAR_PURCHASE = "regular";
const REGULAR_PERCENT = 0.01;

const INCREASED_PURCHASE = "increased";
const INCREASED_PERCENT = 0.05;

const SPECIAL_PURCHASE = "special";
const SPECIAL_PERCENT = 0.3;

let cashback = 0;
let cashbackLimit = 3000;

let purchases = [
    {
        amount: 1000,
        category: REGULAR_PURCHASE
    },
    {
        amount: 3000,
        category: INCREASED_PURCHASE
    },
    {
        amount: 500,
        category: REGULAR_PURCHASE
    },
    {
        amount: 5000,
        category: SPECIAL_PURCHASE
    }
]

for (const purchase of purchases) {
    if (purchase.category === REGULAR_PURCHASE) {
        cashback += purchase.amount * REGULAR_PERCENT;
    } else if (purchase.category === INCREASED_PURCHASE) {
        cashback += purchase.amount * INCREASED_PERCENT;
    } else if (purchase.category === SPECIAL_PURCHASE) {
        cashback += purchase.amount * SPECIAL_PERCENT;
    }
}

if (cashback >= cashbackLimit) {
    cashback = cashbackLimit;
    console.log(cashback);
} else {
    console.log(cashback);
}