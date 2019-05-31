import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { IDataService } from '../interfaces/IDataService';
import { HttpClient } from '@angular/common/http';
import { IOrder } from '../interfaces/IOrder';
import { IOrdersById } from '../interfaces/IOrdersById';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

    // private orderSubject = new Subject<any[]>();
    // order$ = this.orderSubject.asObservable();
    // orders: any[] = [];

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<IMovie[]> {
      return this.httpClient.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  postData(order: IOrder) {
      return this.httpClient.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', order);
  }

  getOrders(): Observable<IOrdersById[]> {
    return this.httpClient.get<IOrdersById[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=3');
  }

//   postResponse(response: any) {
//       this.orders.push(response);
//       this.orderSubject.next(this.orders);
//       console.log('dataservice, nextvalue', response, 'orders', this.orders);
//   }

}
