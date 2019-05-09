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
    // movieId: number;
    movieToModal: any;

  constructor(dataService: DataService) {
    dataService.getData().subscribe(movieAPI => this.movies = movieAPI);
  }


  setMovieWithId(id: number) {
    // this.movieId = id;
    console.log('movie id parent is: ' + id);
    this.movieToModal = this.movies.find(x => x.id === id);
    console.log(this.movieToModal);
  }

//   getMovieFromArray() {
//     this.movieToModal = this.movies.find(x => x.id === this.movieId);
//     console.log(this.movieToModal);
//   }

  ngOnInit() {
  }

}
