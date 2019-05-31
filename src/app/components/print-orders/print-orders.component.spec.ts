import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintOrdersComponent } from './print-orders.component';
import { Component } from '@angular/core';
import { IOrdersById } from 'src/app/interfaces/IOrdersById';

describe('PrintOrdersComponent', () => {

    @Component({
        selector: `app-host-component`,
        template: `<app-print-orders [order]="{
            id: 187,
            companyId: 3,
            created: '201908128',
            createdBy: 'kalle',
            paymentMethod: 'string',
            totalPrice: 87,
            status: 0,
            orderRows: [{id: 879,
                        productId: 76,
                        product: 'string',
                        amount: 9,
                        orderId: 187
                        },
                        {id: 879,
                        productId: 76,
                        product: 'string',
                        amount: 5,
                        orderId: 187}]
                        }"></app-print-orders>`
      })
      class TestHostComponent {
        orders: IOrdersById;

        setInput(newInput: IOrdersById) {
            this.orders = newInput;
        }
      }

    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintOrdersComponent, TestHostComponent ]
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
    testHostComponent.setInput({
        id: 187,
        companyId: 3,
        created: '201908128',
        createdBy: 'kalle',
        paymentMethod: 'string',
        totalPrice: 87,
        status: 0,
        orderRows: [{id: 879,
                    productId: 76,
                    product: 'string',
                    amount: 9,
                    orderId: 187
                    },
                    {id: 879,
                    productId: 76,
                    product: 'string',
                    amount: 5,
                    orderId: 187
                    }]
                });
    testHostFixture.detectChanges();
    expect(testHostComponent.orders.createdBy).toBe('kalle');
    });
});
