import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartContainerComponent } from './cart-container.component';
import { PrintCartContainerComponent } from '../print-cart-container/print-cart-container.component';
import { CartService } from 'src/app/services/cart.service';
import { CartAsideComponent } from '../cart-aside/cart-aside.component';
import { MockDataService } from 'src/app/services/mock-data.service';

describe('CartContainerComponent', () => {
  let component: CartContainerComponent;
  let fixture: ComponentFixture<CartContainerComponent>;
  let service: CartService;
  let mockData: MockDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartContainerComponent, PrintCartContainerComponent, CartAsideComponent ],
      providers: [ CartService, MockDataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockData = TestBed.get(MockDataService);
    service = TestBed.get(CartService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
