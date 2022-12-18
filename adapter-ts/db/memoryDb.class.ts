export default interface IDB {
  name: string;
  price: number;
  entryDate: Date;
}

class DB implements IDB {
  constructor(obj: IDB) {
    this.name = obj.name;
    this.price = obj.price;
    this.entryDate = obj.entryDate;
  }
  name: string;
  price: number;
  entryDate: Date;
}
