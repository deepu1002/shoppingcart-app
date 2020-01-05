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
    selectedCartProduct: CartProduct;
    private shoppingCartProducts: CartProducts;
    sub: Subscription;
    productSelected = false;

    constructor(private shoppingService: ShoppingService) {}

    ngOnInit() {
        this.cartProducts = [];
        this.loadProducts();
        this.loadOrders();
    }

    addToCart(cartProduct: CartProduct) {
      this.shoppingService.SelectedCartProduct = cartProduct;
      this.selectedCartProduct = this.shoppingService.SelectedCartProduct;
      this.productSelected = true;
  }

  removeFromCart(cartProduct: CartProduct) {
      let index = this.getProductIndex(cartProduct.product);
      if (index > -1) {
          this.shoppingCartProducts.cartProducts.splice(
              this.getProductIndex(cartProduct.product), 1);
      }
      this.shoppingService.CartProducts = this.shoppingCartProducts;
      this.shoppingCartProducts = this.shoppingService.CartProducts;
      this.productSelected = false;
  }

  getProductIndex(product: Product): number {
    return this.shoppingService.CartProducts.cartProducts.findIndex(
        value => value.product === product);
  }

  isProductSelected(product: Product): boolean {
      return this.getProductIndex(product) > -1;
  }

    loadProducts() {
        this.shoppingService.getAllProducts()
            .subscribe(
                (products: any[]) => {
                    this.products = products;
                    this.products.forEach(product => {
                        this.cartProducts.push(new CartProduct(product, 0));
                    })
                },
                (error) => console.log(error)
            );
    }

    loadOrders() {
        this.sub = this.shoppingService.OrdersChanged.subscribe(() => {
            this.shoppingCartProducts = this.shoppingService.CartProducts;
        });
    }

    reset() {
      this.cartProducts = [];
      this.loadProducts();
      this.shoppingService.CartProducts.cartProducts = [];
      this.loadOrders();
      this.productSelected = false;
  }

}
