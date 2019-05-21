import { Component, OnInit, Input } from '@angular/core';
import { ICartItem } from 'src/app/interfaces/ICartItem';

@Component({
  selector: 'app-cart-aside',
  templateUrl: './cart-aside.component.html',
  styleUrls: ['./cart-aside.component.css']
})
export class CartAsideComponent implements OnInit {

    @Input() cartAside: ICartItem;

  constructor() { }

  ngOnInit() {
  }

}
