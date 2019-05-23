import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ICartItem } from 'src/app/interfaces/ICartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    // movieRecieved: IMovie;

    cart: ICartItem[];
    cartCount: number;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
    this.cartCount = this.cart.length;
    console.log('cartcomponent constructor cart: ', this.cart, 'row: ', this.cartCount);
   }



  ngOnInit() {
    // this.cart = this.cartService.getCart();

    // this.cartService.currentCart$.subscribe(
    //     cart => {
    //         this.cart = cart;
    //         this.updateCartCount();
    //     }
    //   );
    this.cartService.currentCart$.subscribe(
        cart => {
            this.cart = cart;
            this.cartCount = this.cart.length;
            console.log('cartrow from cart component', this.cartCount, 'and cart: ', this.cart);
        }
      );

    }

    // updateCartCount() {
    //     this.cartRowAmount = this.cart.length;
    // }

}
