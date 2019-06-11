import { Component, OnInit, Renderer2 } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    test: IMovie; // only for testing
    movies: IMovie[];
    categoryMovieList: IMovie[];

    movieFromPrintMovie: IMovie;
    modalToggle: boolean;
    error: string;
    categories: any[];
    bool: boolean;
    // inputValue: string;

    constructor(private dataService: DataService, private renderer: Renderer2) {
    this.dataService.getData().subscribe(
        (movieAPI) => {
            this.movies = movieAPI;
            this.movieFromPrintMovie = this.movies[0];
            this.test = this.movies[1]; // only for testing
            console.log('Observer got a next value: ', movieAPI);
        },
        (error) => {
            console.log('Observer got an error: ', error);
        }
        // () => {
        //     console.log('Observer got a complete notification.');
        // }
        );
    this.dataService.getCategories().subscribe(
            data => {
                this.categories = data;
            }
        );
    //   console.log('constructor home categories', this.categories);
    }

  setMovie(movie: IMovie) {
    this.movieFromPrintMovie = movie;
    this.modalToggle = true;
  }

  closeModal(event: any) {

    // console.log(event.target.className);
    //   event.stopPropagation();

    // if (event.target.className !== 'modal' || 'fa-times') {
    //     this.modalToggle = true;
    // } else if (event.target.className === 'modal' || 'fa-times') {
    //     if (this.modalToggle) {
    //         this.modalToggle = false;
    //         console.log(this.modalToggle);
    // }
    // }

    if (this.modalToggle) {
        this.modalToggle = false;
        // this.movieFromPrintMovie = null;
        // console.log(this.modalToggle);
    }
  }


    // handleInput(input: string) {
    //     console.log('inopt on eneter', input);
    //     if (input === '') {
    //         this.dataService.getData();
    //         return;
    //     } else {
    //         this.searchMovie(input);
    //     }
    // }
    searchMovie(movie: string) {
        console.log('search movie, ', movie);
        console.log('moviefromppm', this.movieFromPrintMovie);
        this.dataService.searchMovie(movie).subscribe(
            search => {
                if (search.length > 0) {
                    this.movies = search;
                    this.error = '';
                } else if (search.length <= 0) {
                    this.error = 'Movie not found';
                }
            },
            error => {
                console.log('Movie not found');
            }
        );
    }
    getAll() {
       this.movies = this.dataService.moviesAll;
    }

    showMovieByCategoryId(id: number) {
        this.movies = this.dataService.moviesAll;
        console.log('getcatergori', id);
        let savedMovies = [];
        for (let i = 0; i < this.movies.length; i++) {
            this.movies[i].productCategory.forEach(item => {
                if (item.categoryId === id) {
                    savedMovies.push(this.movies[i]);
                }
            });
        }
        this.movies = savedMovies;
        // this.bool = true;
        console.log('after loop, saved movies', savedMovies);
    }

    toggleClass(event: any) {
        this.removeClass(event);
        event.srcElement.classList.add('active');
    }
    removeClass(event) {
        // let hasClass = document.getElementsByClassName('active');
        // console.log(hasClass);
        // console.log(event);
        this.renderer.removeClass(event.target, 'active');
    }



  ngOnInit() {
  }

}
