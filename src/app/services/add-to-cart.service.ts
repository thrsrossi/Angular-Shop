import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor() { }

  private movieSource = new Subject<IMovie>();

  movieToAdd$ = this.movieSource.asObservable();

  serviceMovie(movie: IMovie) {
    this.movieSource.next(movie);
    console.log('service: ', movie);
  }


}
