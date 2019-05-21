import { Component, OnInit, ElementRef, EmbeddedViewRef } from '@angular/core';
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
    this.cartService.totalPriceCart$.subscribe(
        cartTotal => {
            this.totalPrice = cartTotal;
        }
      );
    console.log('total price from servie constructor', this.totalPrice);
// this.totalPrice = this.cartService.getTotalPrice();
}

ngOnInit() {
    this.cart = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
    // this.cartService.getTotalPrice().subscribe(
    //     total => {
    //         this.totalPrice = total;
    //     }
    // );
    console.log('total price from servie ngoninit', this.totalPrice);
  }

}

abstract class TemplateRef<C> {
    abstract elementRef: ElementRef;
    abstract createEmbeddedView(context: C): EmbeddedViewRef<C>;
  }
