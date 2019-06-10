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

  setCategories() {
      console.log('beforeloop');
        // this.moviesAll.forEach((movie, index) => {
        //     if (allCustomers.find(p => p.CustomerNo === movie.productCategory.forEach CustomerNo))

        let categoriesArray = [];

        // categoriesArray.map()

    //   movies.forEach((element, index) => {
    //         categoriesArray.push({
    //         categoryId: element.productCategory.find(e => e.id ),
    //         category: (categories.find(e => e.id === element.id)).name
    //         });
    //       });



      for (let i = 0; i < this.moviesAll.length; i++) {
        let movieCat = this.moviesAll[i].productCategory;
        categoriesArray.push(movieCat);
    }

    console.log('categoriesarray', categoriesArray);

      this.moviesAll.forEach((element) => {
            element.productCategory.forEach(category => {
                if (this.afterMap.find(item => item.categoryId === category.categoryId)) {
                    this.afterMap.map(item => {
                        return {
                            category: item.category
                        };
                    });
                }
            });
        });
        console.log('afterforesch', this.moviesAll);
        
        //   private buildCustomerGroupArray(allGroups: any, allCustomers: any): Array<ICustomerGroup> {
            //     let result: Array<ICustomerGroup> = Array<ICustomerGroup>();
            //     this.moviesAll.forEach((movie, index) => {
                // let newList = new IMovie();
                //         newGroup.Name = movie.categoryId;
                //         newGroup.OldName = movie.OldName;
                //         newGroup.CustomerList = Array<ICustomerGroupItem>();
                
    //         movie.productCategory.forEach((category, index2) => {
        //             if (allCustomers.find(p => p.CustomerNo === category.CustomerNo)) {
            //                 let currCust = allCustomers.find(p => p.CustomerNo === category.CustomerNo);
            //                 let newGroupItem: ICustomerGroupItem = new CustomerGroupItem({
                //                     ActionFlag: ActionType.Undefined,
                //                     CustomerName: currCust.Name,
                //                     CustomerNo: currCust.CustomerNo
                //                 });
                
                //                 newGroup.CustomerList.push(newGroupItem);
                //             }
                //         });
                
                //         result.push(newGroup);
                //     });
                
                //     return result;
                // }
                            
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
