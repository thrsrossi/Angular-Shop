import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IOrdersById } from 'src/app/interfaces/IOrdersById';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-print-orders',
  templateUrl: './print-orders.component.html',
  styleUrls: ['./print-orders.component.css']
})
export class PrintOrdersComponent implements OnInit {

    @Input() order: IOrdersById;
    @Output() remove = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  sendIdToDelete() {
    this.remove.emit(this.order.id);
    console.log('id in print-orders', this.order.id);
  }

}
