import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { ICartItem } from '../interfaces/ICartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
    // const sessionStorageContent = JSON.parse(sessionStorage.getItem('sessionCart'));

    // if (sessionStorageContent === null) {
    //     this.cart = [];
    //     console.log('constructor, cart null: ', this.cart);
    // } else {
    //     this.cart = sessionStorageContent;
    //     console.log('constructor, cart yes: ', this.cart);
    // }


    const sessionStorageContent: ICartItem[] = JSON.parse(sessionStorage.getItem('sessionCart'));
    if (sessionStorageContent === null) {
        this.cart = [];
        console.log('constructor, cart null: ', this.cart);
    } else {
        this.cart = sessionStorageContent;
        console.log('constructor, cart yes: ', this.cart);
    }
  }

  private cartSubject = new Subject<ICartItem[]>();

  currentCart$ = this.cartSubject.asObservable();


  private cart: ICartItem[] = [];



  setCart(movieToCart: IMovie) {

    let movieExists = false;


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
    // const sessionStorageContent: ICartItem[] = JSON.parse(sessionStorage.getItem('sessionCart'));
    // if (sessionStorageContent === null) {
    //     this.cart = [];
    //     console.log('constructor, cart null: ', this.cart);
    // } else {
    //     this.cart = sessionStorageContent;
    //     console.log('constructor, cart yes: ', this.cart);
    // }
    // console.log('session storage');
    // for (let i = 0; i < sessionStorage.length; i++) {
    // console.log(sessionStorage.key(i) + '=[' + sessionStorage.getItem(sessionStorage.key(i)) + ']');
    // }
    return this.cart;
    }


    setSessionStorage(sessionCart: ICartItem[] = []) {
        sessionStorage.setItem('sessionCart', JSON.stringify(sessionCart));
        console.log('setsessionrunning, session', sessionCart, 'cart: ', this.cart);
    }

    // getSessionStorage(): ICartItem[] {
    //     let sessionStorageContent: ICartItem[] = JSON.parse(sessionStorage.getItem('sessionCart'));
    //     if (sessionStorageContent === null) {
    //         console.log('No items in sessionStorage');
    //         return [];
    //     } else {
    //         console.log('getsession', sessionStorageContent);
    //         return sessionStorageContent;
    //     }
    // }
}
