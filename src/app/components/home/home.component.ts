import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    movies: IMovie[];

  constructor(dataService: DataService) {
    dataService.getData().subscribe(movieAPI => this.movies = movieAPI);
  }

  ngOnInit() {
  }

}
