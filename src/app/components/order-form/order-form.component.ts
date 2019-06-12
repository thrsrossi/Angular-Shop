import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IOrder } from 'src/app/interfaces/IOrder';
import { IOrderRow } from 'src/app/interfaces/IOrderRow';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import * as moment from 'moment';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { IFormData } from 'src/app/interfaces/IFormData';
import { OrderService } from 'src/app/services/order.service';

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
// submitted = false;

orderResponse: any;

orderForm: FormGroup;
formValues: IFormData;




constructor(private formBuilder: FormBuilder, private cartService: CartService, private dataService: DataService, private router: Router, private orderService: OrderService) {
    this.cartContent = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
    // console.log('constructor form comp cart: ', this.cartContent);
    // console.log('constructor form comp totalprice: ', this.totalPrice);
}

    onSubmit(event): void {
    event.preventDefault();
    console.log('orderformvalueorderformcomp', this.orderForm.value);
    // console.log('orderform', this.orderForm);
    // console.log('payment value', this.payment.value);

    this.placeOrder();
    this.postOrder();
    this.formValues = this.orderForm.value;
    console.log('formvalues component', this.formValues);
    this.orderService.setFormValues(this.formValues);
    this.orderService.setCartContent(this.cartContent);
    this.cartService.clearCart();
    this.router.navigate(['../confirmed']);
    }

    get firstName(): FormControl {
        return this.orderForm.get('firstName') as FormControl;
    }
    get lastName(): FormControl {
        return this.orderForm.get('lastName') as FormControl;
    }
    get email(): FormControl {
        return this.orderForm.get('email') as FormControl;
    }
    get payment(): FormControl {
        return this.orderForm.get('payment') as FormControl;
    }
    get address(): FormControl {
        return this.orderForm.get('address') as FormControl;
    }
    get zip(): FormControl {
        return this.orderForm.get('zip') as FormControl;
    }
    get county(): FormControl {
        return this.orderForm.get('county') as FormControl;
    }

    // get orderInfo(): FormControl {
    //     return this.orderForm as FormControl;
    // }


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
                this.orderService.setPostResponse(this.orderResponse);
                console.log('post orderresponse', this.orderResponse);
                // console.log('next value: ', POSTorder);
            },
            error => {
                console.log('error', error);
            }
        );
    }


    ngOnInit() {
        // this.orderForm = new FormGroup({
        //     'firstName': new FormControl(this.formValues.firstName,
        //     [Validators.required,
        //     Validators.minLength(4),
        //     Validators.pattern(/^\s*[a-zA-Z0-9,\s]+\s*$/)
        //     ]),
        //     'lastName': new FormControl(this.formValues.lastName,
        //     [Validators.required,
        //     Validators.minLength(4),
        //     Validators.pattern(/^\s*[a-zA-Z0-9,\s]+\s*$/)
        //     ]),
        //     'email': new FormControl(this.formValues.email,
        //     [Validators.required, Validators.email
        //     ]),
        //     'address': new FormControl(this.formValues.address,
        //     [Validators.required,
        //     Validators.minLength(6),
        //     Validators.pattern(/^\s*[a-zA-Z0-9,\s]+\s*$/)
        //     ]),
        //     'zip': new FormControl(this.formValues.zip,
        //     [Validators.required,
        //     Validators.maxLength(6),
        //     Validators.pattern(/^\s*[a-zA-Z0-9,\s]+\s*$/)
        //     ]),
        //     'county': new FormControl(this.formValues.county,
        //     [Validators.required,
        //     Validators.minLength(4),
        //     Validators.pattern(/^\s*[a-zA-Z0-9,\s]+\s*$/)
        //     ]),
        //     'payment': new FormControl(this.formValues.paymentMethod,
        //     Validators.required
        //     )
        // });

        this.orderForm = this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^\s*[a-zA-Z0-9,\s]+\s*$/)]],
        lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^\s*[a-zA-Z0-9,\s]+\s*$/)]],
        email: ['', [Validators.required, Validators.email]],
        payment: [this.payments[0], Validators.required],
        address: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^\s*[a-zA-Z0-9,\s]+\s*$/)]],
        county: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^\s*[a-zA-Z0-9,\s]+\s*$/)]],
        zip: ['', [Validators.required, Validators.maxLength(6), Validators.pattern(/^(\(?\+?[0-9])?[0-9_ ]*$/)]]
        });

        this.orderRow = this.mapCart();
    }

    // get firstName() {
    //     return this.orderForm.get('firstName');
    // }
    // get lastName() {
    //     return this.orderForm.get('lasttName');
    // }
    // get email() {
    //     return this.orderForm.get('email');
    // }
    // get payment() {
    //     return this.orderForm.get('payment');
    // }
    // get address() {
    //     return this.orderForm.get('address');
    // }
    // get zip() {
    //     return this.orderForm.get('zip');
    // }
    // get county() {
    //     return this.orderForm.get('county');
    // }


    mapCart(): any[] {
        return this.cartContent.map((item: ICartItem) => {
              return {
                  productId: item.movie.id,
                  amount: item.quantity
              };
        });
    }

}



