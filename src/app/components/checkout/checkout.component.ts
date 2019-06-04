import { Component, OnInit } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

    cart: ICartItem[];
    totalPrice: number;

   constructor(private cartService: CartService) {}

ngOnInit() {
    this.cart = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
    // console.log('checkout oninit totalprice', this.totalPrice);

    this.cartService.totalPriceCart$.subscribe(
        cartTotal => {
            this.totalPrice = cartTotal;
            // console.log('checkout oninit totalprice subscribe', this.totalPrice);
        }
        );
    }

}
