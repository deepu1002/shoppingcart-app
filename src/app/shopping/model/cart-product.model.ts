import {Product} from './product.model';

export class CartProduct {
    id: number;
    productId: number;
    name: string;
    price: number;
    quantity: number;
    userName: string;


    constructor(productId: number, name: string, price: number, quantity: number, userName: string) {
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.userName = userName;
    }
}
