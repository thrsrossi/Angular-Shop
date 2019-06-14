import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';
import { DataService } from 'src/app/services/data.service';
import { ICategoriesAPI } from 'src/app/interfaces/ICategoriesAPI';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    allMoviesAlways: IMovie[];
    movies: IMovie[];
    movieFromPrintMovie: IMovie;
    modalToggle: boolean;
    error: string;
    categories: ICategoriesAPI[];

    constructor(private dataService: DataService) {
        this.dataService.getData().subscribe(
        (movieAPI) => {
            this.movies = movieAPI;
            // store whole array as default for categories functions
            this.allMoviesAlways = movieAPI;
            this.movieFromPrintMovie = this.movies[0];
        },
        (error) => {
            console.log('Observer got an error');
        });
        this.dataService.getCategories().subscribe(
            data => {
                this.categories = data;
            }
        );
    }

    setMovie(movie: IMovie) {
        // get movie from PrintMoviesComponent and store for ModalComponent input decorator - open modal
        this.movieFromPrintMovie = movie;
        this.modalToggle = true;
    }

    closeModal() {
        if (this.modalToggle) {
        this.modalToggle = false;
        }
    }

    handleInput(input: string) {
        const regEx = /^\s*[a-zA-Z0-9,\s]+\s*$/;
        // empty input should get all movies
        if (input === '') {
            this.searchMovie(input);
        } else if (!regEx.test(input)) {
            this.error = '* Invalid input, please try again';
            return;
        } else {
            this.searchMovie(input);
        }
    }
    searchMovie(movie: string) {
        this.dataService.searchMovie(movie).subscribe(
            search => {
                if (search.length > 0) {
                    this.movies = search;
                    this.error = '';
                } else if (search.length <= 0) {
                    this.error = '* Movie not found';
                }
            },
            error => {
                console.log('Search was unsuccessful');
            }
        );
    }

    getAll() {
        // set movies array that is printed on page back to default array
        this.error = '';
        if (this.movies.length < this.allMoviesAlways.length) {
            this.movies = this.allMoviesAlways;
        }
    }

    showMovieByCategoryId(id: number) {
        this.error = '';
        // if category has already been clicked the movie array to print will not contain all movies
        // array to loop for category match needs to be full array, reset to default before looping
        this.movies = this.allMoviesAlways;
        const moviesFromCategoryLoop = [];

        for (let i = 0; i < this.movies.length; i++) {
            this.movies[i].productCategory.forEach(item => {
                if (item.categoryId === id) {
                    // set temporary array of category chosen from user
                    moviesFromCategoryLoop.push(this.movies[i]);
                }
            });
        }
        // set new category array as array to print on page
        this.movies = moviesFromCategoryLoop;
    }

    addClass(event: any) {
        // before adding active styling to element clicked, the current active element needs to be reset
        this.removeClass();
        event.srcElement.classList.add('active');
    }

    removeClass() {
        // find all elements with classname active
        const elementWithClass = document.getElementsByClassName('active');
        // loop through array of elements, remove class
        for (let i = 0; i < elementWithClass.length; i++) {
            elementWithClass[i].removeAttribute('class');
        }
    }

    ngOnInit() {
    }

}
