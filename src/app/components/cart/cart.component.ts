import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ICartItem } from 'src/app/interfaces/ICartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


    cart: ICartItem[];
    toggleVisibility: boolean;
    totalQuantity: number;

    toggleCart() {
    this.toggleVisibility = !this.toggleVisibility;
    }

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
    // this.cartCount = this.cart.length;
    this.totalQuantity = this.cartService.getTotalQuantity();
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
            // this.cartCount = this.cart.length;
            // console.log('cartrow from cart component', this.cartCount, 'and cart: ', this.cart);
        }
      );
    this.cartService.totalQuantity$.subscribe(
          quantity => {
              this.totalQuantity = quantity;
              console.log('cart oninit quantity: ', this.totalQuantity);
          }
      );
    }

}
