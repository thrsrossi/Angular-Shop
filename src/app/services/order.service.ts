import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICartItem } from '../interfaces/ICartItem';
import { IOrder } from '../interfaces/IOrder';
import { IOrderRow } from '../interfaces/IOrderRow';
import { IOrderRows } from '../interfaces/IOrderRows';
import { IOrdersById } from '../interfaces/IOrdersById';
import { IFormData } from '../interfaces/IFormData';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

    private orderCartSubject = new Subject<ICartItem[]>();
    private postResponseSubject = new Subject<IOrdersById>();
    private orderRowSubject = new Subject<IOrderRow>();
    private orderRowsSubject = new Subject<IOrderRows>();
    private formInfoSubject = new Subject<IFormData>();


  orderCartSubject$ = this.orderCartSubject.asObservable();
  postResponseSubject$ = this.postResponseSubject.asObservable();
  orderRowSubject$ = this.orderRowSubject.asObservable();
  orderRowsSubject$ = this.orderRowsSubject.asObservable();
  formInfoSubject$ = this.formInfoSubject.asObservable();

    orderResponse: any;
    orderCart: ICartItem[];
    private orderRow: IOrderRow;
    private orderRows: IOrderRows;
    formInfo: IFormData;


    setPostResponse(response: IOrdersById) {
        this.orderResponse = response;
        console.log('orderservice: response', response);
        this.postResponseSubject.next(response);
    }
    setCartContent(cart: ICartItem[]) {
        this.orderCart = cart;
        console.log('orderservice cart', cart);
        this.orderCartSubject.next(cart);
    }
    setFormValues(formValue: IFormData) {
        this.formInfo = formValue;
        console.log('orderservice formvalue', formValue);
        this.formInfoSubject.next(formValue);
    }

    getPostResponse(): any {
        return this.orderResponse;
    }
    getCartContent(): ICartItem[] {
        return this.orderCart;
    }
    getFormValues(): IFormData {
        return this.formInfo;
    }

  constructor() { }
}
