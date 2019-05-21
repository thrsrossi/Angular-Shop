import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ICartItem } from 'src/app/interfaces/ICartItem';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.css']
})
export class CartContainerComponent implements OnInit {

    cart: ICartItem[];
    totalPrice: number;

   constructor(private cartService: CartService) {
    cartService.totalPriceCart$.subscribe(
        cartTotal => {
            this.totalPrice = cartTotal;
            console.log('total price from service ', this.totalPrice);
        }
      );
// this.totalPrice = this.cartService.getTotalPrice();
}

ngOnInit() {
    this.cart = this.cartService.getCart();
    // console.log('cart from service to cart-container component', this.cart);
  }

}
