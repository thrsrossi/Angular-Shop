import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CartService } from 'src/app/services/cart.service';
import { IMovie } from 'src/app/interfaces/IMovie';
import { PrintCartItemsComponent } from '../print-cart-items/print-cart-items.component';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import { MockDataService } from 'src/app/services/mock-data.service';


describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let service: CartService;
  let mockData: MockDataService;
  let movie: IMovie[];
  let cart: ICartItem[];
//   let movie: IMovie = {
//     id: 6,
//     name: "hej",
//     description: "string",
//     price: 589,
//     imageUrl: "imageUrl",
//     year: 8898,
//     added: "string",
//     productCategory: []
// };
    // let cart: ICartItem = {movie: {id: 6, name: 'hej', description: 'string', price: 589, imageUrl: 'imageUrl', year: 8898, added: 'string', productCategory: []}, quantity: 5};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent, PrintCartItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(CartService);
    mockData = TestBed.get(MockDataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//   it('should get cart', () => {
//     expect(component.cart.length).toBe(0);
//     let movie = mockData.movies[0];

//     service.setCart(movie, 1);
//     service.getCart();
//     expect(component.cart.length).toBe(1);
//   });

//   it('should get movie from modal via service and store in variable', () => {
//     expect(component.movieRecieved).toBeUndefined();
//     backend.serviceMovie(movie);
//     backend.movieToAdd$.subscribe(
//         movieObjectToCart => {
//             component.addToCart(movieObjectToCart);
//             component.movieRecieved = movieObjectToCart;
//         }
//     );
//     expect(component.movieRecieved).toBe(movie);
//   });

});
