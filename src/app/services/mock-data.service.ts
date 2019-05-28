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


    getData(): Observable<IMovie[]> {
        return of(this.movies);
    }

  constructor() { }
}
