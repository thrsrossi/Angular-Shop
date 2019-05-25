import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { MockDataService } from './mock-data.service';
// import { ICartItem } from '../interfaces/ICartItem';

describe('CartService', () => {
    let service: CartService;
    let mockData: MockDataService;
    // const mockService = new MockDataService();
    // let cart: ICartItem[];

    beforeEach(() =>  {
          sessionStorage.clear();
          service = TestBed.get(CartService);
          mockData = TestBed.get(MockDataService);
        //   cart = null;
        //   TestBed.configureTestingModule({
        //       providers: [ CartService, MockDataService ]
        //   });
      });

    it('should be created', () => {
        // const service: CartService = TestBed.get(CartService);
        expect(service).toBeTruthy();
      });

    it('should add movie to cart', () => {
        // const service: CartService = TestBed.get(CartService);
        let cart = service.getCart();
        expect(cart.length).toBe(0);
        const movie = mockData.movies[0];

        service.setCart(movie, 1);
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(1);
      });

    it('should add to same row in cart and add to quantity if movie added exists in cart', () => {

        let cart = service.getCart();
        expect(cart.length).toBe(0);
        const movie = mockData.movies[0];

        service.setCart(movie, 1);
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(1);

        service.setCart(movie, 4);
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(5);
      });

    it('should add new row if movie does not exist in cart', () => {
        let cart = service.getCart();
        expect(cart.length).toBe(0);
        const movie1 = mockData.movies[0];
        const movie2 = mockData.movies[1];

        service.setCart(movie1, 2);
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(2);

        service.setCart(movie2, 4);
        expect(cart.length).toBe(2);
        expect(cart[1].quantity).toBe(4);
      });

    it('removeCartItem() should remove whole row in cart', () => {
        let cart = service.getCart();
        expect(cart.length).toBe(0);
        const movie = mockData.movies[0];

        service.setCart(movie, 2);
        expect(cart.length).toBe(1);
        // expect(cart[0].quantity).toBe(2);

        service.removeCartItem(movie);
        expect(cart.length).toBe(0);
        // expect(cart[0].quantity).toBe(0);
      });

    it('addOneMovie() should add to quantity in cart', () => {
        let cart = service.getCart();
        expect(cart.length).toBe(0);
        const movie = mockData.movies[0];

        service.setCart(movie, 2);
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(2);

        service.addOneMovie(movie);
        expect(cart.length).toBe(1);
        expect(cart[0].quantity).toBe(3);
      });

    // it('removeOneMovie() should subtract to quantity in cart and remove row if quantity is zero', () => {
    //     let cart = service.getCart();
    //     expect(cart.length).toBe(0);
    //     const movie = mockData.movies[0];

    //     service.setCart(movie, 2);
    //     expect(cart.length).toBe(1);
    //     expect(cart[0].quantity).toBe(2);

    //     service.removeOneMovie(movie);
    //     expect(cart.length).toBe(1);
    //     expect(cart[0].quantity).toBe(1);

    //     service.removeOneMovie(movie);
    //     expect(cart.length).toBe(0);
    //     expect(cart[0].quantity).toBe(0);
    //   });

    // it('culculateTotalPrice should calculate total price', () => {
    //     mockData.getData().subscribe(
    //         movies => {
    //             // expect(service.getCart().length).toBe(0);
    //             // service.setCart(movies[0]);
    //             // expect(service.getCart().length).toBe(1);
    //             // expect(service.getCart()[0].quantity).toBe(1);
    //             // expect(service.getCart()[0].movie.price).toBe(80);

    //             // service.setCart(movies[0]);
    //             // expect(service.getCart().length).toBe(1);
    //             // expect(service.getCart()[0].quantity).toBe(2);

    //             // service.setCart(movies[1]);
    //             // expect(service.getCart().length).toBe(2);
    //             // expect(service.getCart()[1].quantity).toBe(1);

    //             // service.culculateTotalPrice();
    //             // service.getTotalPrice();
    //             // expect(service.getTotalPrice()).toBe(165);


    //         }
    //     );
    //   });

});
