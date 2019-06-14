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
    totalQuantity: number;

    constructor(private cartService: CartService) {
        this.cart = this.cartService.getCart();
        this.totalQuantity = this.cartService.getTotalQuantity();
    }

    ngOnInit() {
        this.cartService.currentCart$.subscribe(
            cart => {
                this.cart = cart;
            }
        );
        this.cartService.totalQuantity$.subscribe(
            quantity => {
                this.totalQuantity = quantity;
            }
        );
    }
}
