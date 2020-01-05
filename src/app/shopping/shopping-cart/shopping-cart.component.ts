import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { CartProducts } from '../model/cart-products.model';
import { ShoppingService } from '../service/ShoppingService';
import { CartProduct } from '../model/cart-product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  orderFinished: boolean;
  orders: CartProducts;
  total: number;
  sub: Subscription;

  onOrderFinished: EventEmitter<boolean>;

  constructor(private shoppingService: ShoppingService) {
      this.total = 0;
      this.orderFinished = false;
      this.onOrderFinished = new EventEmitter<boolean>();
  }

  private calculateTotal(products: CartProduct[]): number {
    let sum = 0;
    products.forEach(value => {
        sum += (value.product.price * value.quantity);
    });
    return sum;
}

  ngOnInit() {
      this.orders = new CartProducts();
      this.loadCart();
      this.loadTotal();
  }

  loadTotal() {
      this.sub = this.shoppingService.OrdersChanged.subscribe(() => {
          this.total = this.calculateTotal(this.orders.cartProducts);
      });
  }

  loadCart() {
      this.sub = this.shoppingService.ProductOrderChanged.subscribe(() => {
          let cartProduct = this.shoppingService.SelectedCartProduct;
          if (cartProduct) {
              this.orders.cartProducts.push(new CartProduct(
                cartProduct.product, cartProduct.quantity));
          }
          this.shoppingService.CartProducts = this.orders;
          this.orders = this.shoppingService.CartProducts;
          this.total = this.calculateTotal(this.orders.cartProducts);
      });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  finishOrder() {
    this.orderFinished = true;
    this.shoppingService.Total = this.total;
    this.onOrderFinished.emit(this.orderFinished);
}

reset() {
    this.orderFinished = false;
    this.orders = new CartProducts();
    this.orders.cartProducts = []
    this.loadTotal();
    this.total = 0;
}
}
