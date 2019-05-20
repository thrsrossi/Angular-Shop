import { Component, OnInit, Input } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import { CartService } from 'src/app/services/cart.service';
import { IMovie } from 'src/app/interfaces/IMovie';

@Component({
  selector: 'app-print-cart-container',
  templateUrl: './print-cart-container.component.html',
  styleUrls: ['./print-cart-container.component.css']
})
export class PrintCartContainerComponent implements OnInit {


    @Input() cartItem: ICartItem;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  removeMovieRow(movieToRemove: IMovie) {
    this.cartService.removeCartItem(movieToRemove);
  }

}
