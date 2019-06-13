import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { IDataService } from '../interfaces/IDataService';
import { HttpClient } from '@angular/common/http';
import { IOrder } from '../interfaces/IOrder';
import { IOrdersById } from '../interfaces/IOrdersById';
import { ICategories } from '../interfaces/ICategories';
import { ICategoriesAPI } from '../interfaces/ICategoriesAPI';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

    public categories: any[] = [];
    public afterMap: ICategories[] = [];
    public moviesAll: IMovie[] = [];
    // public moviesAfter: IMovie[] = [];
    // public categoriesAll: ICategories[] = [];

    // public actionMovies: IMovie[] = [];
    // public comedyMovies: IMovie[] = [];
    // public thrillerMovies: IMovie[] = [];
    // public scifiMovies: IMovie[] = [];

  constructor(private httpClient: HttpClient) {
      forkJoin(this.getCategories(), this.getData()).subscribe(
          data => {
              [this.categories, this.moviesAll] = data;
            //   console.log('constructor dataservice, after forkjoin', this.categories, this.moviesAll);
            //   this.afterMap = this.mapCategories();
            //   console.log('aftermap', this.afterMap);
              this.setCategories();
          }
      );
  }

//   mapCategories(): ICategories[] {
//       return this.categories.map(item => {
//           return {
//               categoryId: item.id,
//               category: item.name
//           };
//       });
//   }

  setCategories() {
    for (let i = 0; i < this.moviesAll.length; i++) {
        this.moviesAll[i].productCategory.forEach(item => {
            if (item.categoryId === 5) {
                item.category = 'Action';
            }
            if (item.categoryId === 6) {
                item.category = 'Thriller';
            }
            if (item.categoryId === 7) {
                item.category = 'Comedy';
            }
            if (item.categoryId === 8) {
                item.category = 'Sci-Fi';
            }
        });
    }
    // console.log('after loop movieasll', this.moviesAll);
}

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
