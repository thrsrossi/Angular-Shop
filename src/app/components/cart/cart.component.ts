import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { IMovie } from 'src/app/interfaces/IMovie';
import { ICartItem } from 'src/app/interfaces/ICartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    // movieRecieved: IMovie;

    cart: ICartItem[];
    cartRow: number;

  constructor(private cartService: CartService) {
    //     this.addToCartService.movieToAdd$.subscribe(
    //     movieObjectToCart => {
    //         this.addToCart(movieObjectToCart);
    //         this.movieRecieved = movieObjectToCart;
    //         console.log('recieved in cart.ts: ', this.movieRecieved);
    //     }
    //   );
    this.cart = this.cartService.getCart();
    this.cartRow = this.cart.length;
    console.log('cartcomponent constructor cart: ', this.cart, 'row: ', this.cartRow);
    // this.cartService.currentCart$.subscribe(
    //     cart => {
    //         this.cart = cart;
    //         this.updateCartCount();
    //         console.log('cartrow from cart component', this.cartRowAmount, 'and cart: ', this.cart);
    //     }
    //   );
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
            this.cartRow = this.cart.length;
            console.log('cartrow from cart component', this.cartRow, 'and cart: ', this.cart);
        }
      );

    }

    // updateCartCount() {
    //     this.cartRowAmount = this.cart.length;
    // }

}
