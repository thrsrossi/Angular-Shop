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
        this.totalQuantity = 0;
        // console.log('constructor, cart null: ', this.cart);
    } else {
        this.cart = sessionStorageContent;
        console.log('constructor, cart yes: ', this.cart);

        // get total price and totalquantity
        let calculatedPrice: number = 0;
        let priceOfMovie: number = 0;
        let quantityOfMovies: number = 0;
        let totalQuantityLoop: number = 0;

        for (const cartItem of this.cart) {
            priceOfMovie = cartItem.movie.price;
            quantityOfMovies = cartItem.quantity;
            calculatedPrice += priceOfMovie * quantityOfMovies;
            totalQuantityLoop += quantityOfMovies;
        }
        this.totalPrice = calculatedPrice;
        // this.cartCount = this.cart.length;
        this.totalQuantity = totalQuantityLoop;
    }
  }



  private cartSubject = new Subject<ICartItem[]>();
  private cartTotalSubject = new Subject<number>();
  private quantitySubject = new Subject<number>();


  currentCart$ = this.cartSubject.asObservable();
  totalPriceCart$ = this.cartTotalSubject.asObservable();
  totalQuantity$ = this.quantitySubject.asObservable();


  private cart: ICartItem[] = [];
  private totalPrice: number;
//   cartCount: number;
  totalQuantity: number;



  setCart(movieToCart: IMovie, quantityToAdd: number) {

    let movieExists = false;

    for (const cartItem of this.cart) {
        if (movieToCart.id === cartItem.movie.id) {
            cartItem.quantity += quantityToAdd;
            movieExists = true;
        }
    }
    if (movieExists === false) {
        this.cart.push({movie: movieToCart, quantity: quantityToAdd});
    }

    this.culculateTotalPrice();
    this.setSessionStorage(this.cart);
    this.cartSubject.next(this.cart);
    this.cartTotalSubject.next(this.totalPrice);
  }

  getCart(): ICartItem[] {
      return this.cart;
    }


    setSessionStorage(sessionCart: ICartItem[] = []) {
        sessionStorage.setItem('sessionCart', JSON.stringify(sessionCart));
        // console.log('setsessionrunning, session', sessionCart, 'cart: ', this.cart);
    }

    removeCartItem(movie: IMovie) {
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].movie === movie) {
                this.cart.splice(i, 1);
            }
        }
        this.culculateTotalPrice();
        this.cartSubject.next(this.cart);
        this.setSessionStorage(this.cart);
    }

    addOneMovie(movie: IMovie) {
        for (const cartItem of this.cart) {
            if (cartItem.movie === movie) {
                cartItem.quantity++;
            }
        }
        this.culculateTotalPrice();
        this.cartSubject.next(this.cart);
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
        this.cartSubject.next(this.cart);
        this.setSessionStorage(this.cart);
    }

    culculateTotalPrice() {
        let calculatedPrice: number = 0;
        let priceOfMovie: number = 0;
        let quantityOfMovies: number = 0;
        let totalQuantityLoop: number = 0;

        for (const cartItem of this.cart) {
            priceOfMovie = cartItem.movie.price;
            quantityOfMovies = cartItem.quantity;
            // console.log('priceofmovieinloop: ', priceOfMovie);
            // console.log('quantityinloop: ', quantityOfMovies);
            calculatedPrice += priceOfMovie * quantityOfMovies;
            totalQuantityLoop += quantityOfMovies;
        }

        // console.log('calculatetotalprice - after loop: ', calculatedPrice);
        this.totalPrice = calculatedPrice;
        this.totalQuantity = totalQuantityLoop;
        console.log('calctoatalprice, quantity after loop', this.totalQuantity);
        this.cartTotalSubject.next(this.totalPrice);
        this.quantitySubject.next(this.totalQuantity);

        // return this.totalPriceCart$;
        // return this.totalPrice;
    }

    getTotalPrice(): number {
        // return this.cartTotalSubject.next(this.totalPrice);
        return this.totalPrice;
    }
    getTotalQuantity(): number {
        // this.quantitySubject.next(this.totalQuantity);
        return this.totalQuantity;
    }

    clearCart() {
        sessionStorage.clear();
        this.cart = [];
        this.totalQuantity = 0;
        this.totalPrice = 0;
        this.cartSubject.next(this.cart);
        this.quantitySubject.next(this.totalQuantity);
        this.cartTotalSubject.next(this.totalPrice);
    }
}
