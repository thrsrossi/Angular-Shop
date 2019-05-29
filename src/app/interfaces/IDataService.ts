import { Observable } from 'rxjs';
import { IMovie } from './IMovie';
import { IOrder } from './IOrder';


export interface IDataService {
    getData(): Observable<IMovie[]>;

    postData(order: IOrder);
}
