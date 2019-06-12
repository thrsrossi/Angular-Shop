import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';
import { OrderFormComponent } from '../order-form/order-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CartAsideComponent } from '../cart-aside/cart-aside.component';
import { CartService } from 'src/app/services/cart.service';
import { MockDataService } from 'src/app/services/mock-data.service';
import { ICartItem } from 'src/app/interfaces/ICartItem';


describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let service: CartService;
  let mockData: MockDataService;
  let cart: ICartItem[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutComponent, OrderFormComponent, CartAsideComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockData = TestBed.get(MockDataService);
    service = TestBed.get(CartService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get cart', () => {
    sessionStorage.clear();
    cart = service.getCart();
    expect(cart.length).toBe(0);
    const movie = mockData.movies[0];

    service.setCart(movie, 1);
    expect(cart.length).toBe(1);
    component.ngOnInit();
    expect(component.cart.length).toBe(1);
  });
});
