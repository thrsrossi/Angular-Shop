import { Component, OnInit, Input } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import { IMovie } from 'src/app/interfaces/IMovie';


@Component({
  selector: 'app-print-cart-items',
  templateUrl: './print-cart-items.component.html',
  styleUrls: ['./print-cart-items.component.css']
})
export class PrintCartItemsComponent implements OnInit {

    @Input() cartItem: ICartItem;
    tesint: IMovie;

  constructor() { }

  ngOnInit() {
      console.log('print-cart-component', this.cartItem);
  }

}
