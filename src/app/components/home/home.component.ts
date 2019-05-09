import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    // test: IMovie;
    movies: IMovie[];
    movieFromPrintMovie: IMovie;
    visible: boolean;

    constructor(dataService: DataService) {
    dataService.getData().subscribe(movieAPI => {
        this.movies = movieAPI;
        this.movieFromPrintMovie = this.movies[0];
    });


  }


  setMovie(movie: IMovie) {
    this.movieFromPrintMovie = movie;
    // this.toggleModal();
    console.log('recieved object in parent', movie);
  }
  toggleModal() {
      this.visible = !this.visible;
  }

  ngOnInit() {
  }

}
