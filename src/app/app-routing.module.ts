import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cart', component: CartContainerComponent},
    {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
