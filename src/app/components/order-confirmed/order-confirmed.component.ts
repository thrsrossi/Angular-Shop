import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { IOrdersById } from 'src/app/interfaces/IOrdersById';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import { IFormData } from 'src/app/interfaces/IFormData';

@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.css']
})
export class OrderConfirmedComponent implements OnInit {

    orderResponse: IOrdersById;
    orderCart: ICartItem[];
    formValues: IFormData;

  constructor(private orderService: OrderService) {
   }



  ngOnInit() {
      this.orderResponse = this.orderService.getPostResponse();
      this.orderCart = this.orderService.getCartContent();
      this.formValues = this.orderService.getFormValues();
      console.log('confirmed order response, ', this.orderResponse);
      console.log('confirmed order cart, ', this.orderCart);
      console.log('confirmed order formvalue, ', this.formValues);

  }

}
