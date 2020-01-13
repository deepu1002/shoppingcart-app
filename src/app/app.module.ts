import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductsComponent } from './shopping/products/products.component';
import { OrdersComponent } from './shopping/orders/orders.component';
import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';
import { ShoppingService } from './shopping/service/ShoppingService';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './shopping/login/login.component';
import { LogoutComponent } from './shopping/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    ProductsComponent,
    OrdersComponent,
    ShoppingCartComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
