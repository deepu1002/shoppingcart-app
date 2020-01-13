import { Component, OnInit, ViewChild} from '@angular/core';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  // private collapsed = true;
  //   orderFinished = false;

    // @ViewChild('productsC')
    // productsC: ProductsComponent;

    // @ViewChild('shoppingCartC')
    // shoppingCartC: ShoppingCartComponent;

    // @ViewChild('ordersC')
    // ordersC: OrdersComponent;

    ngOnInit() {
    }

    constructor() {}
    //constructor( private router: Router ) {}

    // toggleCollapsed(): void {
    //     this.collapsed = !this.collapsed;
    // }

    // finishOrder(orderFinished: boolean) {
    //     this.orderFinished = orderFinished;
    // }

    reset() {
        // this.orderFinished = false;
        // this.productsC.reset();
        // this.shoppingCartC.reset();
        // this.ordersC.paid = false;
    }

    // onCustomAction() {
    //   this.router.navigate(['/cart'])
    //     .then(success => console.log('navigation success?' , success))
    //     .catch(console.error);
    // }
}
