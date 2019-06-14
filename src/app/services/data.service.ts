import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { IDataService } from '../interfaces/IDataService';
import { HttpClient } from '@angular/common/http';
import { IOrder } from '../interfaces/IOrder';
import { IOrdersById } from '../interfaces/IOrdersById';
import { ICategoriesAPI } from '../interfaces/ICategoriesAPI';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

    constructor(private httpClient: HttpClient) {}

    getData(): Observable<IMovie[]> {
        return this.httpClient.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
    }

    postData(order: IOrder): Observable<IOrdersById> {
        return this.httpClient.post<IOrdersById>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', order);
    }

    getOrders(): Observable<IOrdersById[]> {
        return this.httpClient.get<IOrdersById[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=3');
    }

    deleteOrder(orderId: number) {
        return this.httpClient.delete('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/' + orderId);
    }

    searchMovie(movie: string): Observable<IMovie[]> {
        // if search is empty, get all movies
        if (movie === '' || movie === undefined || movie === null) {
            return this.getData();
        } else {
            return this.httpClient.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/search?=' + movie);
        }
    }

    getCategories(): Observable<ICategoriesAPI[]>  {
        return this.httpClient.get<ICategoriesAPI[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/categories');
    }
}
