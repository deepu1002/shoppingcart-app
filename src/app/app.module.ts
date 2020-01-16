import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductsComponent } from './shopping/products/products.component';
import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';
import { ShoppingService } from './shopping/service/ShoppingService';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './shopping/login/login.component';
import { LogoutComponent } from './shopping/logout/logout.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    ProductsComponent,
    ShoppingCartComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
