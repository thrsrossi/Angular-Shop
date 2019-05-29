import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IOrder } from 'src/app/interfaces/IOrder';
import { IOrderRow } from 'src/app/interfaces/IOrderRow';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import * as moment from 'moment';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {


order: IOrder;
orderRow: IOrderRow;
submitted = false;
// console.log(moment().format().substring(0, 19));

orderForm: FormGroup = this.formBuilder.group({
        userName: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^\s*[a-zA-Z0-9,\s]+\s*$/)]],
        userEmail: ['', [Validators.required, Validators.email]]
    });


constructor(private formBuilder: FormBuilder, private cartService: CartService, private http: HttpClient) {

}

    onSubmit(e): void {
    e.preventDefault();
      console.log(this.orderForm.value);
      console.log(this.orderForm);
      console.log(this.userName.value);

    //   this.submitted = true;

    // if (this.orderForm.invalid) {
    //         return;
    //     }
         
    }

    get userName(): FormControl {
        return this.orderForm.get('userName') as FormControl;
      }

    get formControls() {
        console.log('formcontrols: ', this.orderForm.controls);
        return this.orderForm.controls;
    }

    ngOnInit() {
        // this.cartToOrder = this.mapCart();
        // console.log(this.cartToOrder);

    }
}


//   mapCart() {
//       return this.cartContent.cartItems.map((item: ICartItem) => {
//             return {
//                 productId: item.movie.id,
//                 amount: item.quantity
//             }
//       });
//   }



