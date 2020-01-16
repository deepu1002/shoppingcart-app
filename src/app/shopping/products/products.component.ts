import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../model/cart-product.model';
import { Product } from '../model/product.model';
import { CartProducts } from '../model/cart-products.model';
import { Subscription } from 'rxjs';
import { ShoppingService } from '../service/ShoppingService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    cartProducts: CartProduct[] = [];
    products: Product[] = [];
    cartProductSize: number;
    searchText;

    constructor(private shoppingService: ShoppingService) {}

    ngOnInit() {
        this.cartProductSize = 0;
        this.cartProducts = [];
        this.products = [];
        this.loadProducts();
        this.getAllCartItems();
    }

  addToCart(product: Product) {
    this.shoppingService.addToCart(new CartProduct(product.id, product.name, product.price, 1, sessionStorage.getItem('username')))
          .subscribe(() => {
           this.getAllCartItems();
        },
        (error) => console.log(error)
    );
  }

  getAllCartItems() {
      this.shoppingService.getAllCartItems(sessionStorage.getItem('username')).subscribe(
        (cartProducts: any[]) => {
          this.cartProducts = [];
          this.cartProducts = cartProducts;
          this.cartProductSize = this.cartProducts.length;
      },
      (error) => console.log(error)
  );
  }

    loadProducts() {
        this.shoppingService.getAllProducts()
            .subscribe(
                (products: any[]) => {
                    this.products = [];
                    this.products = products;
                },
                (error) => console.log(error)
            );
    }

    searchProducts(value: string) {
      this.shoppingService.getSearchProducts(value)
          .subscribe(
              (products: any[]) => {
                  this.products = [];
                  this.products = products;
              },
              (error) => console.log(error)
          );
    }

    loadProductCategory(value: string) {
      this.shoppingService.getAllProductCategory(value)
          .subscribe(
              (products: any[]) => {
                  this.products = [];
                  this.products = products;
              },
              (error) => console.log(error)
          );
  }
}
