export default interface IProduct {
  name: string;
  price: number;
}

class Product implements IProduct {
  constructor(obj: IProduct) {
    this.name = obj.name;
    this.price = obj.price;
  }
  name: string;
  price: number;
}
