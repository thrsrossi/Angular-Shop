import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { ICartItem } from '../interfaces/ICartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
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

    // let sessionStorageContent: ICartItem[] = JSON.parse(sessionStorage.getItem('sessionCart'));
    // console.log('setcart, sessionstoragecontent', sessionStorageContent);
    // const sessionStorageContent = this.getSessionStorage();
    // console.log('result from setcart.getsessionstorager: ', this.getSessionStorage());

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
      return this.cart;
    }


    setSessionStorage(sessionCart: ICartItem[] = []) {
        sessionStorage.setItem('sessionCart', JSON.stringify(sessionCart));
        console.log('setsessionrunning', sessionCart, this.cart);
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



    // setCart(movieToCart: IMovie) {

    //     // let sessionStorageContent: ICartItem[] = JSON.parse(sessionStorage.getItem('sessionCart'));
    //     // console.log('setcart, sessionstoragecontent', sessionStorageContent);
    //     const sessionStorageContent = this.getSessionStorage();
    //     console.log('result from setcart.getsessionstorager: ', this.getSessionStorage());
    
    //     let movieExists = false;
    
    //     if (sessionStorageContent) {
    //         for (let i = 0; i < sessionStorageContent.length; i++) {
    //             if (movieToCart.id === sessionStorageContent[i].movie.id) {
    //                 sessionStorageContent[i].quantity++;
    //                 movieExists = true;
    //                 console.log(this.cart);
    //             }
    //         }
    //         if (movieExists === false) {
    //         sessionStorageContent.push({movie: movieToCart, quantity: 1});
    //         }
    //         this.setSessionStorage(sessionStorageContent);
    //     }
    
    
    //     this.cartSubject.next(this.cart);
    

}
