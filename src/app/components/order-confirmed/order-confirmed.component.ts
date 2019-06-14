import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { IOrdersById } from 'src/app/interfaces/IOrdersById';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import { IFormData } from 'src/app/interfaces/IFormData';
import { IMovieFromOrder } from 'src/app/interfaces/IMovieFromOrder';

@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.css']
})
export class OrderConfirmedComponent implements OnInit {

    orderResponse: IOrdersById;
    orderCart: ICartItem[];
    formValues: IFormData;
    movieInfo: IMovieFromOrder[] = [];

    constructor(public orderService: OrderService) {
        // get post response via order service from subscribe in OrderFormComponent
        this.orderService.postResponseSubject$.subscribe(
            response => {
                this.orderResponse = response;
            }
        );
    }

    ngOnInit() {
        // get cart from ordered just posted and form values to print address on comfirmed page
        this.orderCart = this.orderService.getCartContent();
        this.formValues = this.orderService.getFormValues();
        // map cart and store the data that should be printed on page
        this.movieInfo = this.mapCart();
    }

    mapCart(): IMovieFromOrder[] {
        return this.orderCart.map((item: ICartItem) => {
                return {
                    movieUrl: item.movie.imageUrl,
                    movieTitle: item.movie.name,
                    movieQuantity: item.quantity
                };
        });
    }
}
