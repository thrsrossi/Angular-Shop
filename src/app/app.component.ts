import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movieShop';

  
  // constructor(private service: DataService) {}
  
//   inputValue: string;

//     handleInput(input: string) {
//         console.log('inout on eneter', input);
//         // regex
//         this.searchMovie(input);
//     }
//     searchMovie(movie: string) {
//         console.log('search movie, ', movie);
//         this.service.searchMovie(movie);
//     }
}
