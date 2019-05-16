import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { ICartItem } from '../interfaces/ICartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartSubject = new Subject<ICartItem[]>();

  currentCart$ = this.cartSubject.asObservable();


  private cart: ICartItem[] = [];

  setCart(movieToCart: IMovie) {

    let movieExist = false;

    for (let i = 0; i < this.cart.length; i++) {
        if (movieToCart.id === this.cart[i].movie.id) {
            this.cart[i].quantity++;
            movieExist = true;
            console.log(this.cart, movieExist);
        }
    }
    if (movieExist === false) {
        this.cart.push({movie: movieToCart, quantity: 1});
    }
    console.log('cart content in service: ', this.cart);


    this.cartSubject.next(this.cart);
    // console.log('service: ', movieToCart);
  }

  getCart(): ICartItem[] {
    return this.cart;
  }
}
