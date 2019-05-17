import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CartService } from 'src/app/services/cart.service';
import { IMovie } from 'src/app/interfaces/IMovie';
import { PrintCartItemsComponent } from '../print-cart-items/print-cart-items.component';


describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let backend: CartService;
  let movie: IMovie = {
    id: 6,
    name: "hej",
    description: "string",
    price: 589,
    imageUrl: "imageUrl",
    year: 8898,
    added: "string",
    productCategory: []
};

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
    backend = TestBed.get(CartService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

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
