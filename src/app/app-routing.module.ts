import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './shopping/login/login.component';
import { LogoutComponent } from './shopping/logout/logout.component';
import { AuthGaurdService } from './shopping/service/AuthGuardService';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: ShoppingCartComponent, canActivate:[AuthGaurdService]},
  { path: 'home',  component: ShoppingComponent, canActivate:[AuthGaurdService]},
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService]}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
