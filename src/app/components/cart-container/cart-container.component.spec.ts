import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartContainerComponent } from './cart-container.component';
import { PrintCartContainerComponent } from '../print-cart-container/print-cart-container.component';
import { CartService } from 'src/app/services/cart.service';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import { MockCartService } from 'src/app/services/mock-cart.service';

describe('CartContainerComponent', () => {
  let component: CartContainerComponent;
  let fixture: ComponentFixture<CartContainerComponent>;
  let cartService: CartService;
  let mockService: MockCartService;
//   let cartItem: ICartItem[];
  let cartItem: ICartItem[] = [{
        movie: {
          id: 6,
          name: "hej",
          description: "string",
          price: 589,
          imageUrl: "imageUrl",
          year: 8898,
          added: "string",
          productCategory: []
      },
      quantity: 5
    }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartContainerComponent, PrintCartContainerComponent ],
      providers: [ MockCartService, CartService ]
    })
    .compileComponents();
    // service = TestBed.get(mockService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('object for cart should be same as cart in mockservice', () => {
    mockService = TestBed.get(MockCartService);
    expect(mockService.cart).toEqual(cartItem);
  });
//   it('object for cart should be same as cart in mockservice', () => {
//     mockService = TestBed.get(MockCartService);
//     expect(mockService.cart).toEqual(cartItem);
//   });

//   it('#getValue should return real value from the real service', () => {
//     mockService = new MockCartService(new CartService());
//     expect(mockService.getValue()).toBe('real value');
//   });
});
