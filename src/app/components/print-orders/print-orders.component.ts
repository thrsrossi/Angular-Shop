import { Component, OnInit, Input } from '@angular/core';
import { IOrder } from 'src/app/interfaces/IOrder';

@Component({
  selector: 'app-print-orders',
  templateUrl: './print-orders.component.html',
  styleUrls: ['./print-orders.component.css']
})
export class PrintOrdersComponent implements OnInit {

    @Input() order: IOrder;

  constructor() { }

  ngOnInit() {
  }

}
