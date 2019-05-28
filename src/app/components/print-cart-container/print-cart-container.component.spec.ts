import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCartContainerComponent } from './print-cart-container.component';
import { Component } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/ICartItem';

describe('PrintCartContainerComponent', () => {

    @Component({
        selector: `host-component`,
        template: `<app-print-cart-container [cartItem]="{movie: {id: 6, name: 'hej', description: 'string', price: 589, imageUrl: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80', year: 8898, added: 'string', productCategory: []}, quantity: 5}"></app-print-cart-container>`
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
      declarations: [ PrintCartContainerComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

    beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

    it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

    it('should show movie title', () => {
    testHostComponent.setInput({movie: {id: 6, name: 'hej', description: 'string', price: 589, imageUrl: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80', year: 8898, added: 'string', productCategory: []}, quantity: 5});
    testHostFixture.detectChanges();
    expect(testHostComponent.cartItem.movie.name).toBe('hej');
    });
});

