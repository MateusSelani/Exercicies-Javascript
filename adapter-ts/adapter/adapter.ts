import IDB from "../db/memoryDb.class";
import IProduct from "../product/product.class";

function adapter(prod: IProduct) {
  const { name, price } = prod;

  const db: IDB = {
    name,
    price,
    entryDate: new Date(),
  };
  console.log(db);
}

const p: IProduct = { name: "scanner", price: 200 };
adapter(p);
