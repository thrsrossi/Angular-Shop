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

    movieRecieved: IMovie;

  constructor(private cartService: CartService) {
    //     this.addToCartService.movieToAdd$.subscribe(
    //     movieObjectToCart => {
    //         this.addToCart(movieObjectToCart);
    //         this.movieRecieved = movieObjectToCart;
    //         console.log('recieved in cart.ts: ', this.movieRecieved);
    //     }
    //   );
   }


  cart: ICartItem[];

  ngOnInit() {
    this.cart = this.cartService.getCart();
    // console.log('recieved from service in cart component', this.cart);
}


}
