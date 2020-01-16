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
    this.total = this.calculateTotal();
   }

   getAllCartItems() {
      console.log(sessionStorage.getItem('username'));
      this.shoppingService.getAllCartItems(sessionStorage.getItem('username')).subscribe(
        (cartProducts: any[]) => {
          this.cartProducts = [];
          this.cartProducts = cartProducts;
          this.total = this.calculateTotal();
      },
      (error) => console.log(error)
  );
  }

  updateCartProduct(cartProduct: CartProduct) {
      console.log(cartProduct.id);
      this.shoppingService.updateCartProduct(cartProduct).subscribe(
        (cartProducts: any[]) => {
          this.getAllCartItems();
      },
      (error) => console.log(error)
  );
}

  deleteProduct(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.shoppingService.deleteCartProduct(id).subscribe(data => {
        this.getAllCartItems();
      });
    }
  }


   calculateTotal() {
      let sum  = 0;
      this.cartProducts.forEach(value => {
        sum += (value.price * value.quantity);
      });
      return sum;
  }

}
