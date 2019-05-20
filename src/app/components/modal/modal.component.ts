import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    @Input() movieModal: IMovie;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

    addToCart(movieToAdd: IMovie) {
        this.cartService.setCart(movieToAdd);
    }

    // addToCart(movieToAdd: IMovie, event) {
    //     event.stopPropagation();
    //     this.cartService.setCart(movieToAdd);
    //     // console.log('movie sent to service: ', movieToAdd);
    // }


}
