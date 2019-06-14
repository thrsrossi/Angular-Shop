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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConfirmedComponent ]
    })
    .overrideComponent(OrderConfirmedComponent, {set: { providers: [{provide: DataService, useClass: MockDataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmedComponent);
    component = fixture.componentInstance;
    // create mock cart content for component to be truthy
    spyOn(component.orderService, 'getCartContent').and.returnValue(new MockDataService().cart);
    fixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });

});
