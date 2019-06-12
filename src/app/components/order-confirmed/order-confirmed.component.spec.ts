import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmedComponent } from './order-confirmed.component';
import { MockDataService } from 'src/app/services/mock-data.service';
import { OrderService } from 'src/app/services/order.service';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import { IOrder } from 'src/app/interfaces/IOrder';

describe('OrderConfirmedComponent', () => {
  let component: OrderConfirmedComponent;
  let fixture: ComponentFixture<OrderConfirmedComponent>;
  let mockData: MockDataService;
  let orderService: OrderService
  let cart: ICartItem;
  let order: IOrder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConfirmedComponent ]
    //   providers: [MockDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockData = TestBed.get(MockDataService);
    orderService = TestBed.get(OrderService);

  });

//   it('should create', () => {
//     component.orderCart = mockData.cart;
//     expect(component).toBeTruthy();
//   });
});
