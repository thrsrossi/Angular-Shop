import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { MockDataService } from './mock-data.service';
import { ICartItem } from '../interfaces/ICartItem';

describe('CartService', () => {
    let service: CartService;
    let mockData: MockDataService;
    let cart: ICartItem[];

    beforeEach(() =>  {
        sessionStorage.clear();
        service = TestBed.get(CartService);
        mockData = TestBed.get(MockDataService);
        cart = [];
      });

    it('should be created', () => {
        expect(service).toBeTruthy();
      });

    it('should add movie to cart', () => {
        cart = service.getCart();
        expect(cart.length).toBe(0);
        const movie = mockData.movies[0];

        service.setCart(movie, 1);
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(1);

        sessionStorage.clear();
      });

    it('should add to same row in cart and add to quantity if movie added exists in cart', () => {
        cart = service.getCart();
        expect(cart.length).toBe(0);
        const movie = mockData.movies[0];

        service.setCart(movie, 1);
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(1);

        service.setCart(movie, 4);
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(5);

        sessionStorage.clear();
      });

    it('should add new row if movie does not exist in cart', () => {
        cart = service.getCart();
        expect(cart.length).toBe(0);
        const movie1 = mockData.movies[0];
        const movie2 = mockData.movies[1];

        service.setCart(movie1, 2);
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(2);

        service.setCart(movie2, 4);
        expect(cart.length).toBe(2);
        expect(cart[1].quantity).toBe(4);

        sessionStorage.clear();
      });

    it('(removeCartItem()) should remove whole row in cart', () => {
        cart = service.getCart();
        expect(cart.length).toBe(0);
        const movie = mockData.movies[0];

        service.setCart(movie, 2);
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(2);

        service.removeCartItem(movie);
        expect(cart.length).toBe(0);

        sessionStorage.clear();
      });

    it('(addOneMovie()) should add to quantity in cart', () => {
        const movie = mockData.movies[0];
        cart = service.getCart();

        expect(cart.length).toBe(0);
        service.setCart(movie, 5);
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(5);

        service.addOneMovie(movie);
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(6);

        sessionStorage.clear();
      });

    it('(removeOneMovie()) should subtract to quantity in cart and remove row if quantity is zero', () => {
        let cart = service.getCart();
        expect(cart.length).toBe(0);
        const movie = mockData.movies[0];

        service.setCart(movie, 2);
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(2);

        service.removeOneMovie(movie);
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(1);

        service.removeOneMovie(movie);
        expect(cart.length).toBe(0);

        sessionStorage.clear();
      });

    it('should calculate total price', () => {
        let cart = service.getCart();
        expect(cart.length).toBe(0);
        const movie = mockData.movies[0];

        service.setCart(movie, 2);
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(2);
        expect(cart[0].movie.price).toBe(80);

        service.culculateTotalPrice();
        expect(service.getTotalPrice()).toBe(160);

        sessionStorage.clear();
      });

    it('(clearCart) should empty cart, quantity, session storage and totalprice', () => {
        let cart = service.getCart();
        expect(cart.length).toBe(0);
        const movie = mockData.movies[0];

        service.setCart(movie, 2);
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(2);
        expect(cart[0].movie.price).toBe(80);
        service.culculateTotalPrice();
        expect(service.getTotalPrice()).toBe(160);
        expect(service.getCart().length).toBe(1);
        expect(service.getTotalQuantity()).toBe(2);

        service.clearCart();
        expect(service.getCart().length).toBe(0);
        expect(service.getTotalQuantity()).toBe(0);
        expect(service.getTotalPrice()).toBe(0);
        expect(sessionStorage.length).toBe(0);

        sessionStorage.clear();
      });

});
