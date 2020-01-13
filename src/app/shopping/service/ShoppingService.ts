import {CartProduct} from '../model/cart-product.model';
import {Subject} from 'rxjs/internal/Subject';
import {CartProducts} from '../model/cart-products.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ShoppingService {
    private productsUrl = 'api/products/';
    private cartUrl = 'api/cart';
    private categoryUrl = 'api/products/category/';

    private cartProduct: CartProduct;
    private cart: CartProducts = new CartProducts();

    private cartProductSubject = new Subject();
    private cartSubject = new Subject();
    private totalSubject = new Subject();

    private total: number;

    ProductOrderChanged = this.cartProductSubject.asObservable();
    OrdersChanged = this.cartSubject.asObservable();
    TotalChanged = this.totalSubject.asObservable();

    constructor(private http: HttpClient) {
    }

    getAllProducts() {
        return this.http.get(this.productsUrl);
    }

    getAllProductCategory(value: string) {
      return this.http.get(this.categoryUrl + value);
  }

    saveOrder(cart: CartProducts) {
        return this.http.post(this.cartUrl, cart);
    }

    set SelectedCartProduct(value: CartProduct) {
        this.cartProduct = value;
        this.cartProductSubject.next();
    }

    get SelectedCartProduct() {
        return this.cartProduct;
    }

    set CartProducts(value: CartProducts) {
        this.cart = value;
        this.cartSubject.next();
    }

    get CartProducts() {
        return this.cart;
    }

    get Total() {
        return this.total;
    }

    set Total(value: number) {
        this.total = value;
        this.totalSubject.next();
    }
}
