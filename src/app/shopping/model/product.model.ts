export class Product {
  id: number;
  name: string;
  price: number;
  genre: string;
  author: string;
  publications: string;
  type: string;
  brand: string;
  design: string;

  constructor(id: number, name: string, price: number) {
      this.id = id;
      this.name = name;
      this.price = price;
  }
}
