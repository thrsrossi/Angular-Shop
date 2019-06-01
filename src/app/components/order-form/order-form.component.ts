import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IOrder } from 'src/app/interfaces/IOrder';
import { IOrderRow } from 'src/app/interfaces/IOrderRow';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import * as moment from 'moment';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

order: IOrder;
payments: string[] = ['Paypal', 'Venmo', 'Debit card'];

cartContent: ICartItem[];
orderRow: IOrderRow[] = [];
totalPrice: number;
submitted = false;

orderResponse: any;

orderForm: FormGroup;



constructor(private formBuilder: FormBuilder, private cartService: CartService, private dataService: DataService, private router: Router) {
    this.cartContent = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
    console.log('constructor form comp cart: ', this.cartContent);
    console.log('constructor form comp totalprice: ', this.totalPrice);
}

    onSubmit(e): void {
    e.preventDefault();
    console.log(this.orderForm.value);
    console.log(this.orderForm);
    console.log(this.payment.value);

    //   this.submitted = true;

    // if (this.orderForm.invalid) {
    //         return;
    //     }

    this.placeOrder();
    // this.dataService.getOrderToPost(this.order);
    // console.log('onsubmit, order: ', this.order);
    this.postOrder();
    // this.router.navigate(['../confirmed']);
    }

    get firstName(): FormControl {
        return this.orderForm.get('firstName') as FormControl;
    }
    get lastName(): FormControl {
        return this.orderForm.get('lasttName') as FormControl;
    }
    get email(): FormControl {
        return this.orderForm.get('email') as FormControl;
    }
    get payment(): FormControl {
        return this.orderForm.get('payment') as FormControl;
    }


    // get formControls() {
    //     console.log('formcontrols: ', this.orderForm.controls);
    //     return this.orderForm.controls;
    // }
    placeOrder() {
        this.order = {
            id: 0,
            companyId: 3,
            created: moment().format().substring(0, 19),
            createdBy: this.firstName.value,
            paymentMethod: this.payment.value,
            totalPrice: this.totalPrice,
            status: 0,
            orderRows: this.orderRow
        };
        console.log('placeOrder, order: ', this.order);
    }

    postOrder() {
        this.dataService.postData(this.order).subscribe(
            POSTorder => {
                this.orderResponse = POSTorder;
                console.log('next value: ', POSTorder);
                this.router.navigate(['../confirmed']);
                // console.log('orderresponse', this.orderResponse);
                // this.dataService.postResponse(POSTorder);
            },
            error => {
                console.log('error', error);
            }
        );
    }

    ngOnInit() {
        this.orderForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^\s*[a-zA-Z0-9,\s]+\s*$/)]],
            lastName: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^\s*[a-zA-Z0-9,\s]+\s*$/)]],
            email: ['', [Validators.required, Validators.email]],
            payment: [this.payments[0], Validators.required]
        });
        this.orderRow = this.mapCart();
        console.log(this.orderRow);
        // this.orderRow.push(this.cartContent);
    }


    mapCart(): any[] {
        return this.cartContent.map((item: ICartItem) => {
              return {
                  productId: item.movie.id,
                  amount: item.quantity
              };
        });
    }

}



