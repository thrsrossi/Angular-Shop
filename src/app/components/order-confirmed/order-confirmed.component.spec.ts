import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmedComponent } from './order-confirmed.component';
import { MockDataService } from 'src/app/services/mock-data.service';
import { OrderService } from 'src/app/services/order.service';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import { IOrder } from 'src/app/interfaces/IOrder';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';

describe('OrderConfirmedComponent', () => {
  let component: OrderConfirmedComponent;
  let fixture: ComponentFixture<OrderConfirmedComponent>;
//   let mockData: MockDataService;
//   let orderService: OrderService;
//   let cartService: CartService;
//   let cart: ICartItem[];
//   let order: IOrder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConfirmedComponent ]
    //   providers: [MockDataService]
    })
    .overrideComponent(OrderConfirmedComponent, {set: { providers: [{provide: DataService, useClass: MockDataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {
    

    fixture = TestBed.createComponent(OrderConfirmedComponent);
    component = fixture.componentInstance;

    spyOn(component.orderService, 'getCartContent').and.returnValue(new MockDataService().cart);
    
    fixture.detectChanges();
    // mockData = TestBed.get(MockDataService);
    // orderService = TestBed.get(OrderService);
    // component.ngOnInit();
  });

  it('should create', () => {

    
    // sessionStorage.clear();
    // cart = cartService.getCart();
    // expect(cart.length).toBe(0);
    // const movie = mockData.movies[0];

    // cartService.setCart(movie, 1);
    // expect(cart.length).toBe(1);
    // component.ngOnInit();
    // expect(component.orderCart.length).toBe(1);
      
      expect(component).toBeTruthy();
  });

});
