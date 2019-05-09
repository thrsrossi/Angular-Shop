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
    modalToggle: boolean;

    // @ViewChild('modal') modal: ElementRef;
    // visible = false;

    constructor(dataService: DataService) {
    dataService.getData().subscribe(movieAPI => {
        this.movies = movieAPI;
        this.movieFromPrintMovie = this.movies[0];
    });
  }

  setMovie(movie: IMovie) {
    this.movieFromPrintMovie = movie;
    this.toggleModal();
    console.log('recieved object in parent', movie);
  }
  toggleModal() {
    this.modalToggle = !this.modalToggle;
    console.log(this.modalToggle);
  }

  closeModal() {
    this.toggleModal();
  }

//   overlayClicked(event) {
//     if (event.path.indexOf(this.modal.nativeElement) === -1) {
//       this.visible = false;
//     }
//   }

  ngOnInit() {
  }

}
