import { Component, OnInit } from '@angular/core';
import { CartProducts } from '../model/cart-products.model';
import { Subscription } from 'rxjs';
import { ShoppingService } from '../service/ShoppingService';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: CartProducts;
  total: number;
  paid: boolean;
  sub: Subscription;

  constructor(private shoppingService: ShoppingService) {
      //this.orders = this.shoppingService.CartProducts;
  }

  ngOnInit() {
      // this.paid = false;
      // this.sub = this.shoppingService.OrdersChanged.subscribe(() => {
      //     this.orders = this.shoppingService.CartProducts;
      // });
      // this.loadTotal();
  }

  // pay() {
  //     this.paid = true;
  //     this.shoppingService.saveOrder(this.orders).subscribe();
  // }

  // loadTotal() {
  //   this.sub = this.shoppingService.TotalChanged.subscribe(() => {
  //       this.total = this.shoppingService.Total;
  //   });
//}
}
