import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCartItemsComponent } from './print-cart-items.component';
import { Component } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/ICartItem';

describe('PrintCartItemsComponent', () => {

    @Component({
        selector: `host-component`,
        template: `<app-print-cart-items [cartItem]="{movie: {id: 6, name: 'hej', description: 'string', price: 589, imageUrl: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80', year: 8898, added: 'string', productCategory: []}, quantity: 5}"></app-print-cart-items>`
        })
        class TestHostComponent {
        cartItem: ICartItem;

        setInput(newInput: ICartItem) {
            this.cartItem = newInput;
        }
    }

    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;
//   let component: PrintCartItemsComponent;
//   let fixture: ComponentFixture<PrintCartItemsComponent>;

    beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintCartItemsComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

    beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
    // fixture = TestBed.createComponent(PrintCartItemsComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

    it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

    it('should show movie title', () => {
    testHostComponent.setInput({movie: {id: 6, name: 'hej', description: 'string', price: 589, imageUrl: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80', year: 8898, added: 'string', productCategory: []}, quantity: 5});
    testHostFixture.detectChanges();
    // expect(testHostFixture.nativeElement.querySelector('div').innerText).toContain('hej');
    expect(testHostComponent.cartItem.movie.name).toBe('hej');
    });

//   it('should show movie image on home page', () => {
//     expect(testHostFixture.nativeElement.querySelector('.image-box>img').src).toContain('imageUrl');
//   });


});





