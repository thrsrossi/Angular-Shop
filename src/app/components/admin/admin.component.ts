import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IOrdersById } from 'src/app/interfaces/IOrdersById';
import { IOrderRow } from 'src/app/interfaces/IOrderRow';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    orders: IOrdersById[] = [];

  constructor(private dataService: DataService) {
      this.dataService.getOrders().subscribe(
          ordersAPI => {
              this.orders = ordersAPI;
              console.log('orders in admin constructor', this.orders);
          },
          error => {
              console.log('getOrders could not get', error);
          }
      );

   }

  ngOnInit() {
  }

}
