import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartContainerComponent } from './cart-container.component';
import { PrintCartContainerComponent } from '../print-cart-container/print-cart-container.component';
import { CartService } from 'src/app/services/cart.service';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import { CartAsideComponent } from '../cart-aside/cart-aside.component';
import { MockDataService } from 'src/app/services/mock-data.service';

describe('CartContainerComponent', () => {
  let component: CartContainerComponent;
  let fixture: ComponentFixture<CartContainerComponent>;
  let service: CartService;
  let mockData: MockDataService;
  let cart: ICartItem[];
//   let cartItem: ICartItem[] = [{
//         movie: {
//           id: 6,
//           name: "hej",
//           description: "string",
//           price: 589,
//           imageUrl: "imageUrl",
//           year: 8898,
//           added: "string",
//           productCategory: []
//       },
//       quantity: 5
//     }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartContainerComponent, PrintCartContainerComponent, CartAsideComponent ],
      providers: [ CartService, MockDataService ]
    })
    // .overrideComponent(CartContainerComponent, {set: { providers: [{provide: DataService, useClass: MockDataService}]}})
    .compileComponents();
    // service = TestBed.get(mockService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockData = TestBed.get(MockDataService);
    service = TestBed.get(CartService);
    // component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get cart', () => {
    // sessionStorage.clear();
    // cart = service.getCart();
    // expect(cart.length).toBe(0);
    // const movie = mockData.movies[0];

    // service.setCart(movie, 1);
    // expect(cart.length).toBe(1);
    // component.ngOnInit();
    // expect(component.cart.length).toBe(1);
  });

});
