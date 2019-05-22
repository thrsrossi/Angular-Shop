import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAsideComponent } from './cart-aside.component';
import { Component } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/ICartItem';


describe('CartAsideComponent', () => {

    @Component({
        selector: `host-component`,
        template: `<app-cart-aside [cartItem]="{movie: {id: 6, name: 'hej', description: 'string', price: 589, imageUrl: 'imageUrl', year: 8898, added: 'string', productCategory: []}, quantity: 5}"></app-cart-aside>`
        })
        class TestHostComponent {
        cartItem: ICartItem;

        setInput(newInput: ICartItem) {
            this.cartItem = newInput;
        }
    }
    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartAsideComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

    beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });
//   let component: CartAsideComponent;
//   let fixture: ComponentFixture<CartAsideComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CartAsideComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CartAsideComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

    it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

    it('should show movie quantity', () => {
    testHostComponent.setInput({movie: {id: 6, name: 'hej', description: 'string', price: 589, imageUrl: 'imageUrl', year: 8898, added: 'string', productCategory: []}, quantity: 5});
    testHostFixture.detectChanges();
    expect(testHostComponent.cartItem.quantity).toBe(5);
    });
});
