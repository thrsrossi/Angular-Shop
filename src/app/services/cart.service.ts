import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
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

        // get total price
        let calculatedPrice: number = 0;
        let priceOfMovie: number;
        let quantityOfMovies: number;

        for (const cartItem of this.cart) {
            priceOfMovie = cartItem.movie.price;
            quantityOfMovies = cartItem.quantity;
            calculatedPrice += priceOfMovie * quantityOfMovies;
        }
        this.totalPrice = calculatedPrice;
    }
    console.log('constructor cartservice, totalprice: ', this.totalPrice);
  }

  private cartSubject = new Subject<ICartItem[]>();
  private cartTotalSubject = new Subject<number>();


  currentCart$ = this.cartSubject.asObservable();
  totalPriceCart$ = this.cartTotalSubject.asObservable();


  private cart: ICartItem[] = [];
  private totalPrice: number;



  setCart(movieToCart: IMovie) {

    let movieExists = false;

    for (const cartItem of this.cart) {
        if (movieToCart.id === cartItem.movie.id) {
            cartItem.quantity++;
            movieExists = true;
        }
    }
    if (movieExists === false) {
        this.cart.push({movie: movieToCart, quantity: 1});
    }

    this.culculateTotalPrice();
    this.setSessionStorage(this.cart);
    this.cartSubject.next(this.cart);
    this.cartTotalSubject.next(this.totalPrice);
  }

  getCart(): ICartItem[] {
    //   this.cartSubject.next(this.cart);
      return this.cart;
    }


    setSessionStorage(sessionCart: ICartItem[] = []) {
        sessionStorage.setItem('sessionCart', JSON.stringify(sessionCart));
        // console.log('setsessionrunning, session', sessionCart, 'cart: ', this.cart);
        this.culculateTotalPrice();
    }

    removeCartItem(movie: IMovie) {
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].movie === movie) {
                this.cart.splice(i, 1);
            }
        }
        this.culculateTotalPrice();
        this.setSessionStorage(this.cart);
    }

    addOneMovie(movie: IMovie) {
        for (const cartItem of this.cart) {
            if (cartItem.movie === movie) {
                cartItem.quantity++;
            }
        }
        this.culculateTotalPrice();
        this.setSessionStorage(this.cart);
    }

    removeOneMovie(movie: IMovie) {
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].movie === movie) {
                this.cart[i].quantity--;
            }
            if (this.cart[i].quantity === 0) {
                this.cart.splice(i, 1);
            }

        }
        this.culculateTotalPrice();
        this.setSessionStorage(this.cart);
    }

    culculateTotalPrice() {
        let calculatedPrice: number = 0;
        let priceOfMovie: number;
        let quantityOfMovies: number;

        for (const cartItem of this.cart) {
            priceOfMovie = cartItem.movie.price;
            quantityOfMovies = cartItem.quantity;
            // calculatedPrice += this.cart[i].quantity * this.cart[i].movie.price;
            // console.log('priceofmovieinloop: ', priceOfMovie);
            // console.log('quantityinloop: ', quantityOfMovies);
            calculatedPrice += priceOfMovie * quantityOfMovies;
        }

        console.log('calculatetotalprice - after loop: ', calculatedPrice);
        this.totalPrice = calculatedPrice;
        this.cartTotalSubject.next(this.totalPrice);

        // return this.totalPriceCart$;
        // return this.totalPrice;
    }

    getTotalPrice(): number {
        // return this.cartTotalSubject.next(this.totalPrice);
        return this.totalPrice;
    }

}
