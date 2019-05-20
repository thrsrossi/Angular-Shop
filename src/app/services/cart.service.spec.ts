import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { MockDataService } from './mock-data.service';

describe('CartService', () => {
    let service: CartService;
    const mockService = new MockDataService();

    beforeEach(() =>  {
          sessionStorage.clear();
          service = TestBed.get(CartService);
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

        // const mockService = new MockDataService();
        mockService.getData().subscribe(
            movies => {
                expect(service.getCart().length).toBe(0);
                service.setCart(movies[0]);
                expect(service.getCart().length).toBe(1);
            }
        );
      });
    it('should add to same row in cart if movie added exists in cart', () => {
        // const service: CartService = TestBed.get(CartService);

        // const mockService = new MockDataService();
        mockService.getData().subscribe(
            movies => {
                expect(service.getCart().length).toBe(0);
                service.setCart(movies[0]);
                expect(service.getCart().length).toBe(1);

                service.setCart(movies[0]);
                expect(service.getCart().length).toBe(1);
                // expect(service.getCart())
            }
        );
      });
    it('should add new row if movie does not exist in cart', () => {
        // const service: CartService = TestBed.get(CartService);

        // const mockService = new MockDataService();
        mockService.getData().subscribe(
            movies => {
                expect(service.getCart().length).toBe(0);
                service.setCart(movies[0]);
                expect(service.getCart().length).toBe(1);

                service.setCart(movies[1]);
                expect(service.getCart().length).toBe(2);

                // service.setCart(movies[1]);
                // expect(service.getCart().length).toBe(2);
                // service.setCart(movies[2]);
                // expect(service.getCart().length).toBe(3);
            }
        );
      });

});
