import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieShop';

    toggleVisibility: boolean;
    inputValue: string;

//   toggleCart() {
//     this.toggleVisibility = !this.toggleVisibility;
//   }

    handleInput(input: string) {
        console.log('inout on eneter', input);
    }
    searchMovie(movie: string) {
        console.log('search movie, ', movie);
    }



}
