import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ICartItem } from 'src/app/interfaces/ICartItem';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.css']
})
export class CartContainerComponent implements OnInit {

    cartFromService: ICartItem[];

   constructor(private service: CartService) {
//     service.serviceCart$.subscribe(
//         serviceCart => {
//             this.cartFromService = serviceCart;
//             console.log('recieved in cart container ', this.cartFromService);
//         }
//       );
   }



  ngOnInit() {
    this.cartFromService = this.service.getCart();
    console.log('cart from service to cart-container component', this.cartFromService);
  }

}
