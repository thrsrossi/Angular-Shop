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

  quantityValue = 1;

    addToCart(movieToAdd: IMovie) {
        // let quantityToAdd = +quantity;
        console.log('addtocartmodal quantityvalue', this.quantityValue);

        this.cartService.setCart(movieToAdd, this.quantityValue);
        this.quantityValue = 1;
    }


    addValue() {
        this.quantityValue++;
    }

    removeValue() {
        this.quantityValue--;
        if (this.quantityValue <= 0) {
            this.quantityValue = 0;
        }
        // do while?
    }

    // addToCart(movieToAdd: IMovie, event) {
    //     event.stopPropagation();
    //     this.cartService.setCart(movieToAdd);
    //     // console.log('movie sent to service: ', movieToAdd);
    // }


}
