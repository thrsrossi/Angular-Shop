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
        } else {
            this.cart = sessionStorageContent;

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
    totalQuantity: number;

    setCart(movieToCart: IMovie, quantityToAdd: number) {
        let movieExists = false;

        // if movie exists, add to quantity on same cart row
        for (const cartItem of this.cart) {
            if (movieToCart.id === cartItem.movie.id) {
                cartItem.quantity += quantityToAdd;
                movieExists = true;
            }
        }
        // if movie does not exist, create new object in cart
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
    }

    removeCartItem(movie: IMovie) {
        // remove whole movie row/index from cart
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
        // add one to quantity in movie row
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
        // remove one from quantity in movie row
        for (let i = 0; i < this.cart.length; i++) {
            if (this.cart[i].movie === movie) {
                this.cart[i].quantity--;
            }
            // if quantity in movie row is zero, remove whole row/index from array
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
            calculatedPrice += priceOfMovie * quantityOfMovies;
            totalQuantityLoop += quantityOfMovies;
        }

        this.totalPrice = calculatedPrice;
        this.totalQuantity = totalQuantityLoop;
        this.cartTotalSubject.next(this.totalPrice);
        this.quantitySubject.next(this.totalQuantity);
    }

    getTotalPrice(): number {
        return this.totalPrice;
    }
    getTotalQuantity(): number {
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
