import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { IDataService } from '../interfaces/IDataService';
import { HttpClient } from '@angular/common/http';
import { IOrder } from '../interfaces/IOrder';
import { IOrdersById } from '../interfaces/IOrdersById';
import { ICategories } from '../interfaces/ICategories';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

    public categories: ICategories[] = [];
    public moviesAll: IMovie[] = [];

    public actionMovies: IMovie[] = [];
    public comedyMovies: IMovie[] = [];
    public thrillerMovies: IMovie[] = [];
    public scifiMovies: IMovie[] = [];

  constructor(private httpClient: HttpClient) {
      forkJoin(this.getCategories(), this.getData()).subscribe(
          data => {
              [this.categories, this.moviesAll] = data;
              console.log('constructor dataservice, after forkjoin', this.categories, this.moviesAll);
          }
      );


    //   forkJoin get data plus get categpries, subscribe, lägga alla filmer i lista
    // med varje kateogi i ny funktion, lagra variabel med filmerna, skriv funktion som
    // hämtar , 'all' blir då get data
  }

  getData(): Observable<IMovie[]> {
      return this.httpClient.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  postData(order: IOrder) {
      return this.httpClient.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', order);
  }


  getOrders(): Observable<IOrdersById[]> {
    return this.httpClient.get<IOrdersById[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=3');
  }

    deleteOrder(orderId: number) {
        return this.httpClient.delete('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/' + orderId);
    }

    searchMovie(movie: string): Observable<IMovie[]> {
        if (movie === '' || movie === undefined || movie === null) {
            return this.getData();
        } else {
            return this.httpClient.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/search?=' + movie);
        }
    }

    getCategories(): Observable<ICategories[]> {
        return this.httpClient.get<ICategories[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/categories');
    }
}
