import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { IDataService } from '../interfaces/IDataService';
import { HttpClient } from '@angular/common/http';
import { IOrder } from '../interfaces/IOrder';
import { IOrdersById } from '../interfaces/IOrdersById';
import { ICategories } from '../interfaces/ICategories';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

    public categories: any[] = [];
    public moviesAll: IMovie[] = [];
    public moviesAfter: IMovie[] = [];
    public afterMap: ICategories[] = [];
    public categoriesAll: ICategories[] = [];

    public actionMovies: IMovie[] = [];
    public comedyMovies: IMovie[] = [];
    public thrillerMovies: IMovie[] = [];
    public scifiMovies: IMovie[] = [];

  constructor(private httpClient: HttpClient) {
      forkJoin(this.getCategories(), this.getData()).subscribe(
          data => {
              [this.categories, this.moviesAll] = data;
              console.log('constructor dataservice, after forkjoin', this.categories, this.moviesAll);
              this.afterMap = this.mapCategories();
              console.log('aftermap', this.afterMap);
              this.setCategories();
          }
      );
    //   forkJoin([this.getCategories(), this.getData()]).subscribe(
    //       data => {
    //           [this.categories, this.moviesAll] = data;
    //           for (let i = 0; i < this.moviesAll.length; i++) {
    //             this.moviesAll[i].productCategory.map(item => {
    //                 this.moviesAfter.push({
    //                     categoryId: item.categoryId,
    // //                 category: (categories.find(e => e.id === element.id)).name
    //                 })
    //             })
    //           }
    //           this.moviesAll.map((movie: IMovie) => {

    //           })
    //       }
    //   )


    //   forkJoin get data plus get categpries, subscribe, lägga alla filmer i lista
    // med varje kateogi i ny funktion med loop, lagra variabel med filmerna, skriv funktion som
    // hämtar , 'all' blir då get data
  }

  mapCategories(): ICategories[] {
      return this.categories.map(item => {
          return {
              categoryId: item.id,
              category: item.name
          };
      });
  }
//   mapInto(): IMovie[] {
//     for (let i = 0; i < this.moviesAll.length; i++) {
//         return this.moviesAll[i].productCategory.keys

//     }

//   }

  setCategories() {
      console.log('beforeloop');
        let categoriesArray = [];

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
        console.log('after loop movieasll', this.moviesAll);



    //   for (let i = 0; i < this.moviesAll.length; i++) {

    //     let movieCat = this.moviesAll[i].productCategory;
    //     console.log('moviecat', movieCat);
    //     categoriesArray.push(movieCat);

    //     for (let x = 0; x < this.afterMap.length; x++) {
    //             if (categoriesArray[i].categoryId === this.afterMap[x].categoryId) {
    //                 categoriesArray[i].category = this.afterMap[x].category;
    //                 console.log('afterloop', this.moviesAll);
    //             }
    //         }



    // }

    console.log('categoriesarray', categoriesArray);
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

    getCategories(): Observable<any[]>  {
        return this.httpClient.get<any[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/categories');
    }
}
