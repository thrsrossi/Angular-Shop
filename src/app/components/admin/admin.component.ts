import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IOrdersById } from 'src/app/interfaces/IOrdersById';

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
            },
            error => {
                console.log('getOrders could not get');
            }
        );
    }

    updateOrders() {
        this.dataService.getOrders().subscribe(
            orders => {
                this.orders = orders;
            }
        );
    }

    deleteOrder(id: number) {
        this.dataService.deleteOrder(id).subscribe(
            next => {
                this.updateOrders();
            }
        );
    }

    ngOnInit() {
    }

}
