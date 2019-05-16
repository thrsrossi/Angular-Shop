import { Component, OnInit, Input } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/ICartItem';

@Component({
  selector: 'app-print-cart-container',
  templateUrl: './print-cart-container.component.html',
  styleUrls: ['./print-cart-container.component.css']
})
export class PrintCartContainerComponent implements OnInit {


    @Input() cartItem: ICartItem;

  constructor() { }

  ngOnInit() {
  }

}
