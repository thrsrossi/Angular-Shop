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
    quantityValue = 1;

    constructor(private cartService: CartService) {}

    ngOnInit() {}


    addToCart(movieToAdd: IMovie) {
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
    }
}
