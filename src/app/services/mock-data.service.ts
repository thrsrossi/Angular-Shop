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
        imageUrl: "imageUrl",
        year: 1954,
        added: "string",
        productCategory: []
    },
    {
        id: 7,
        name: "hopp",
        description: "annat",
        price: 5,
        imageUrl: "bild",
        year: 1987,
        added: "string",
        productCategory: []
    },
    {
        id: 8,
        name: "gubbe",
        description: "kopp",
        price: 76,
        imageUrl: "bilas4",
        year: 1934,
        added: "hju",
        productCategory: []
    }];


    getData(): Observable<IMovie[]> {
        return of(this.movies);
    }

  constructor() { }
}
