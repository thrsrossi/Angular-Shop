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

    // movieUrls: string[];
    // movieTitle: string[];
    // movieQuantity: number[];

  constructor(private orderService: OrderService) {
      this.orderService.postResponseSubject$.subscribe(
          response => {
              this.orderResponse = response;
            //   console.log('confirmed order response after sub, ', this.orderResponse);
          }
      );
   }



  ngOnInit() {
    //   this.orderResponse = this.orderService.getPostResponse();
    this.orderCart = this.orderService.getCartContent();
    this.formValues = this.orderService.getFormValues();
    // console.log('confirmed order cart, ', this.orderCart);
    // console.log('confirmed order formvalue, ', this.formValues);

    this.movieInfo = this.mapCart();
    console.log('oninit confirmd movieinfo', this.movieInfo);
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

// forkjoin
