import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { PrintCartItemsComponent } from './components/print-cart-items/print-cart-items.component';
// import { CartComponent } from './components/cart/cart.component';
import { CartContainerComponent } from './components/cart-container/cart-container.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cart', component: CartContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
