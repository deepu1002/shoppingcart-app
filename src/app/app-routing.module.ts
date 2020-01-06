import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [ 
  // { path: 'cart', component: ShoppingCartComponent }, 
  // { path: 'home',  component: AppComponent},
  // { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
