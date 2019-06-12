import { Observable } from 'rxjs';
import { IMovie } from './IMovie';
import { IOrder } from './IOrder';
import { IOrdersById } from './IOrdersById';
import { ICategoriesAPI } from './ICategoriesAPI';


export interface IDataService {
    getData(): Observable<IMovie[]>;

    postData(order: IOrder);

    getOrders(): Observable<IOrdersById[]>;

    deleteOrder(orderId: number);

    searchMovie(movie: string): Observable<IMovie[]>;

    getCategories(): Observable<ICategoriesAPI[]>;

    setCategories();
}
