import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartProducts } from '../model/cart-products.model';
import { ShoppingService } from '../service/ShoppingService';
import { CartProduct } from '../model/cart-product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartProducts: CartProduct[] = [];
  total: number;
  sub: Subscription;

  constructor(private shoppingService: ShoppingService) {

  }

   ngOnInit() {
    this.total = 0;
    this.cartProducts = [];
    this.getAllCartItems();
    this.calculateTotal();
   }

   getAllCartItems() {
    this.shoppingService.getAllCartItems('john').subscribe(
      (cartProducts: any[]) => {
        this.cartProducts = [];
        this.cartProducts = cartProducts;
    },
    (error) => console.log(error)
);
}

   private calculateTotal() {
      let sum  = 0;
      this.cartProducts.forEach(value => {
        sum += (value.price * value.quantity);
      });
      this.total = sum;
  }
}
