import { Component, OnInit, Renderer2 } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    allMoviesAlways: IMovie[];
    movies: IMovie[];
    categoryMovieList: IMovie[];

    movieFromPrintMovie: IMovie;
    modalToggle: boolean;
    error: string;
    categories: any[];
    // bool: boolean;
    // inputValue: string;

    constructor(private dataService: DataService, private renderer: Renderer2) {
    this.dataService.getData().subscribe(
        (movieAPI) => {
            this.movies = movieAPI;
            this.allMoviesAlways = movieAPI;
            this.movieFromPrintMovie = this.movies[0];
            console.log('Observer got a next value: ', movieAPI);
        },
        (error) => {
            console.log('Observer got an error: ', error);
        });
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
        // console.log('search movie, ', movie);
        // console.log('moviefromppm', this.movieFromPrintMovie);
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
        if (this.movies.length < this.allMoviesAlways.length) {
            this.movies = this.allMoviesAlways;
        }
    }

    showMovieByCategoryId(id: number) {
        this.movies = this.allMoviesAlways;
        console.log('getcatergori', id);
        let moviesFromCategoryLoop = [];
        console.log('test before forloop', this.movies);
        for (let i = 0; i < this.movies.length; i++) {
            console.log('test inside forloop', this.movies);
            this.movies[i].productCategory.forEach(item => {
                if (item.categoryId === id) {
                    moviesFromCategoryLoop.push(this.movies[i]);
                }
            });
        }
        this.movies = moviesFromCategoryLoop;
        // this.bool = true;
        console.log('after loop, saved movies', moviesFromCategoryLoop);
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
