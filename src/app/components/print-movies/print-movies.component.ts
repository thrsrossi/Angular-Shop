import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-print-movies',
  templateUrl: './print-movies.component.html',
  styleUrls: ['./print-movies.component.css']
})
export class PrintMoviesComponent implements OnInit {

    @Input() movie: IMovie;
    @Output() showMovie = new EventEmitter<IMovie>();

    sendMovieToParent() {
        this.showMovie.emit(this.movie);
    }

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(movieToAdd: IMovie, quantityToAdd: number) {
    this.cartService.setCart(movieToAdd, quantityToAdd);
}

}
