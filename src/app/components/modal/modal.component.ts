import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';
// , Output, EventEmitter

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    @Input() movieModal: IMovie;

  constructor() {}

  ngOnInit() {
  }

  quantity: number;
  movie: string;

  addToCart(quantity: number, movie: string) {
    this.quantity = quantity;
    this.movie = movie;
    console.log('quantity: ', quantity, 'movie: ', movie);
  }

}
