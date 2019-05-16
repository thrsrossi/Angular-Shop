import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { IMovie } from 'src/app/interfaces/IMovie';
import { ICartItem } from 'src/app/interfaces/ICartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    movieRecieved: IMovie;

  constructor(private addToCartService: AddToCartService) {
        this.addToCartService.movieToAdd$.subscribe(
        movieObjectToCart => {
            this.addToCart(movieObjectToCart);
            this.movieRecieved = movieObjectToCart;
            console.log('recieved in cart.ts: ', this.movieRecieved);
        }
      );
   }


  cart: ICartItem[] = [];

  ngOnInit() {
    // this.addToCartService.movieToAdd$.subscribe(
    //     movieObjectToCart => {
    //         this.movieRecieved = movieObjectToCart;
    //         // this.addToCart(movieObjectToCart);
    //         console.log('recieved movie: ', this.movieRecieved);
    //     }
    // );
}


  addToCart(movieToAdd: IMovie) {

    let addedMovie = false;

    for (let i = 0; i < this.cart.length; i++) {
        if (movieToAdd.id === this.cart[i].movie.id) {
            this.cart[i].quantity++;
            addedMovie = true;
            console.log(this.cart, addedMovie);
        }
    }
    if (addedMovie === false) {
        this.cart.push({movie: movieToAdd, quantity: 1});
    }

    console.log('cart content: ', this.cart);
}

}
