import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
// import { ICartItem } from 'src/app/interfaces/ICartItem';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [AddToCartService]
})
export class ModalComponent implements OnInit {

    @Input() movieModal: IMovie;

    // cart: ICartItem[] = [];

  constructor(private addToCartService: AddToCartService) {}

  ngOnInit() {}

    addToCart(movieToAdd: IMovie) {
        this.addToCartService.serviceMovie(movieToAdd);
        console.log('movie sent to service: ', movieToAdd);
    }



//   quantity: number;
//   movie: string;

//   addToCart(quantity: number, movie: string) {
//     this.quantity = quantity;
//     this.movie = movie;
//     console.log('quantity: ', quantity, 'movie: ', movie);
//   }

    // addToCart(movieToAdd: IMovie) {

    //     let addedMovie = false;

    //     for (let i = 0; i < this.cart.length; i++) {
    //         if (movieToAdd.id === this.cart[i].movie.id) {
    //             this.cart[i].quantity++;
    //             addedMovie = true;
    //             console.log();
    //         }
    //     }
    //     if (addedMovie === false) {
    //         this.cart.push({movie: movieToAdd, quantity: 1});
    //     }

    //     console.log('cart content: ', this.cart);
    // }

}
