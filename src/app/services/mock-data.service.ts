import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { IDataService } from '../interfaces/IDataService';
import { Observable, of } from 'rxjs';
import { IOrder } from '../interfaces/IOrder';
import { IOrdersById } from '../interfaces/IOrdersById';
import { ICategories } from '../interfaces/ICategories';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IDataService {

    movies: IMovie[] = [{
        id: 6,
        name: "hej",
        description: "string",
        price: 80,
        imageUrl: "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        year: 1954,
        added: "string",
        productCategory: []
    },
    {
        id: 7,
        name: "hopp",
        description: "annat",
        price: 5,
        imageUrl: "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        year: 1987,
        added: "string",
        productCategory: []
    },
    {
        id: 8,
        name: "gubbe",
        description: "kopp",
        price: 100,
        imageUrl: "https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        year: 1934,
        added: "hju",
        productCategory: []
    }];

    orders: IOrdersById[] = [{
        id: 187,
        companyId: 3,
        created: '201908128',
        createdBy: 'string',
        paymentMethod: 'string',
        totalPrice: 87,
        status: 0,
        orderRows: [{id: 879,
                    productId: 76,
                    product: 'string',
                    amount: 9,
                    orderId: 187,
                    },
                    {id: 879,
                    productId: 76,
                    product: 'string',
                    amount: 5,
                    orderId: 187,
                    }],
    },
    {
        id: 876,
        companyId: 3,
        created: '87576590',
        createdBy: 'heja',
        paymentMethod: 'string',
        totalPrice: 980,
        status: 0,
        orderRows: [{id: 790,
                    productId: 76,
                    product: 'string',
                    amount: 7,
                    orderId: 876,
                    },
                    {id: 879,
                    productId: 76,
                    product: 'string',
                    amount: 1,
                    orderId: 876,
                    },
                    {id: 879,
                    productId: 76,
                    product: 'string',
                    amount: 1,
                    orderId: 876,
                    }],
    }];


    getData(): Observable<IMovie[]> {
        return of(this.movies);
    }

    postData(order: IOrder) {
        return of(order);
    }

    getOrders(): Observable<IOrdersById[]> {
        return of(this.orders);
    }

    deleteOrder(orderId: number) {
        return of(orderId);
    }
    searchMovie(movie: string): Observable<IMovie[]>  {
        return of(this.movies);
    }
    getCategories(): Observable<any[]> {
        return of(this.movies);
    }

  constructor() { }
}
