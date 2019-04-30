import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';

@Component({
  selector: 'app-print-movies',
  templateUrl: './print-movies.component.html',
  styleUrls: ['./print-movies.component.css']
})
export class PrintMoviesComponent implements OnInit {

    @Input() movie: IMovie;


  constructor() { }

  ngOnInit() {
  }

}
