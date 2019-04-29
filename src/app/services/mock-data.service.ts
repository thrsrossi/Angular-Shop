import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { IDataService } from '../interfaces/IDataService';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IDataService {

    movies: IMovie[] = [{
        id: 6,
        name: "hej",
        description: "string",
        price: 589,
        imageUrl: "string",
        year: 8898,
        added: "string",
        productCategory: []
    },
    {
        id: 6,
        name: "hej",
        description: "string",
        price: 589,
        imageUrl: "string",
        year: 8898,
        added: "string",
        productCategory: []
    },
    {
        id: 6,
        name: "hej",
        description: "string",
        price: 589,
        imageUrl: "string",
        year: 8898,
        added: "string",
        productCategory: []
    }];


    getData(): Observable<IMovie[]> {
        return of(this.movies);
    }

  constructor() { }
}
