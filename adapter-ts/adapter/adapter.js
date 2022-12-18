"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function adapter(prod) {
    const { name, price } = prod;
    const db = {
        name,
        price,
        entryDate: new Date(),
    };
    console.log(db);
}
const p = { name: "scanner", price: 200 };
adapter(p);
