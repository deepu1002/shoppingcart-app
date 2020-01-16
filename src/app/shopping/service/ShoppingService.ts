import { CartProduct } from '../model/cart-product.model';
import {Subject} from 'rxjs/internal/Subject';
import { CartProducts } from '../model/cart-products.model';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ShoppingService {
    private productsUrl = 'api/products/';
    private cartUrl = 'api/cart/';
    private categoryUrl = 'api/products/category/';
    private searchUrl = 'api/products/name/';

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

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }


    getAllProducts() {
        return this.http.get(this.productsUrl);
    }

    getAllCartItems(userName: string) {
      return this.http.get(this.cartUrl + 'name/' + userName);
  }

    getAllProductCategory(value: string) {
      return this.http.get(this.categoryUrl + value);
  }

    getSearchProducts(value: string) {
      return this.http.get(this.searchUrl + value);
    }

    saveOrder(cart: CartProducts) {
        return this.http.post(this.cartUrl, cart);
    }

    addToCart(cartProduct: CartProduct) {
      return this.http.post(this.cartUrl, cartProduct);
    }

    updateCartProduct(cartProduct: CartProduct) {
      return this.http.put(this.cartUrl, cartProduct);
    }

    deleteCartProduct(id) {
      return this.http.delete(this.cartUrl + id, this.httpOptions);
    }

  }
