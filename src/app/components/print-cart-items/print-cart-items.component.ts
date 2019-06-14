import { Component, OnInit, Input } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/ICartItem';


@Component({
  selector: 'app-print-cart-items',
  templateUrl: './print-cart-items.component.html',
  styleUrls: ['./print-cart-items.component.css']
})
export class PrintCartItemsComponent implements OnInit {

    @Input() cartItem: ICartItem;

    constructor() { }

    ngOnInit() {
    }

}
