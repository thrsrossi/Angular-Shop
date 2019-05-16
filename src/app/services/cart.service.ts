import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { ICartItem } from '../interfaces/ICartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
      console.log('constructor, get: ', this.getSessionStorage());
  }

  private cartSubject = new Subject<ICartItem[]>();

  currentCart$ = this.cartSubject.asObservable();


  private cart: ICartItem[] = [];



  setCart(movieToCart: IMovie) {

    // let sessionStorageContent: ICartItem[] = JSON.parse(sessionStorage.getItem('sessionCart'));
    // console.log('setcart, sessionstoragecontent', sessionStorageContent);

    let movieExists = false;

    // if (sessionStorageContent == null) {

    // }


    for (let i = 0; i < this.cart.length; i++) {
        if (movieToCart.id === this.cart[i].movie.id) {
            this.cart[i].quantity++;
            movieExists = true;
            console.log(this.cart, movieExists);
        }
    }
    if (movieExists === false) {
        this.cart.push({movie: movieToCart, quantity: 1});
    }
    // console.log('cart content in service: ', this.cart);


    this.setSessionStorage(this.cart);
    this.cartSubject.next(this.cart);
  }

  getCart(): ICartItem[] {
      return this.cart;
    }


    setSessionStorage(sessionCart: ICartItem[] = []) {
        sessionStorage.setItem('sessionCart', JSON.stringify(sessionCart));
        console.log('set function to storage', sessionStorage);
    }

    getSessionStorage(): ICartItem[] {
        let sessionStorageContent: ICartItem[] = JSON.parse(sessionStorage.getItem('sessionCart'));
        console.log('getsessionbeforeif', sessionStorageContent);
        if (sessionStorageContent === null) {
            return [];
        } else {
            console.log('getsession', sessionStorage, 'this.cart: ', this.cart);
            return this.cart;
        }
    }

}
