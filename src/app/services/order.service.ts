import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICartItem } from '../interfaces/ICartItem';
import { IOrdersById } from '../interfaces/IOrdersById';
import { IFormData } from '../interfaces/IFormData';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

    private orderCartSubject = new Subject<ICartItem[]>();
    private postResponseSubject = new Subject<IOrdersById>();
    private formInfoSubject = new Subject<IFormData>();

    orderCartSubject$ = this.orderCartSubject.asObservable();
    postResponseSubject$ = this.postResponseSubject.asObservable();
    formInfoSubject$ = this.formInfoSubject.asObservable();

    orderResponse: any;
    orderCart: ICartItem[];
    formInfo: IFormData;

    setPostResponse(response: IOrdersById) {
        this.orderResponse = response;
        this.postResponseSubject.next(response);
    }
    setCartContent(cart: ICartItem[]) {
        this.orderCart = cart;
        this.orderCartSubject.next(cart);
    }
    setFormValues(formValue: IFormData) {
        this.formInfo = formValue;
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
