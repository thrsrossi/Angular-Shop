import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { MockCartService } from 'src/app/services/mock-cart.service';
import { CartService } from 'src/app/services/cart.service';
import { IMovie } from 'src/app/interfaces/IMovie';

describe('ModalComponent', () => {

    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;
    let cartService: CartService;
    let mockCartService: MockCartService;
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
      declarations: [ ModalComponent ],
      providers: [MockCartService, CartService]
    })
    .compileComponents();
  }));


    beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should create', () => {
    expect(ModalComponent).toBeTruthy();
  });

  it('should use ValueService', () => {
    cartService = TestBed.get(CartService);
    expect(cartService.setCart(movie)).toBe('real value');
  });


//     it('should set value from input', () => {
//     expect(component.quantity).toBeUndefined();
//     expect(component.movie).toBeUndefined();
//     component.addToCart(3, 'hej');
//     expect(component.quantity).toBe(3);
//     expect(component.movie).toBe('hej');
//   });




});
