import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { IOrder } from 'src/app/interfaces/IOrder';
import { IOrderRow } from 'src/app/interfaces/IOrderRow';
import { ICartItem } from 'src/app/interfaces/ICartItem';
import * as moment from 'moment';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { IFormData } from 'src/app/interfaces/IFormData';

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
error: any;
// formValues: IFormData;
errors = [];



constructor(private formBuilder: FormBuilder, private cartService: CartService, private dataService: DataService, private router: Router) {
    this.cartContent = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
    // console.log('constructor form comp cart: ', this.cartContent);
    // console.log('constructor form comp totalprice: ', this.totalPrice);
}

    onSubmit(e): void {
    e.preventDefault();
    console.log(this.orderForm.value);
    console.log(this.orderForm);
    console.log(this.payment.value);

    // this.submitted = true;

    // // stop here if form is invalid
    // if (this.orderForm.invalid) {
    //     return;
    // }

    this.placeOrder();
    // this.dataService.getOrderToPost(this.order);
    // console.log('onsubmit, order: ', this.order);
    this.postOrder();
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


    get formControls() {
        console.log('formcontrols: ', this.orderForm.controls);
        return this.orderForm.controls;
    }



    //  patternValidator(regexp: RegExp): ValidatorFn {
    //   return (control: AbstractControl): { [key: string]: any } => {
    //     const value = control.value;
    //     if (value === '') {
    //       return null;
    //     }
    //     return !regexp.test(value) ? { 'patternInvalid': { regexp } } : null;
    //   };
    // }
        // getErrorMessage(controlName, displayName) {
        //     let result = "";
        //     let errors  = loginForm.controls[controlName].errors;
        //     if (errors.required) {
        //         result += (displayName + " is required.");
        //     }
        //     if (errors.whatever) {
        //         result += "Whatever you like";
        //     }
        //     return result;
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
                // console.log('orderresponse', this.orderResponse);
                // this.dataService.postResponse(POSTorder);
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
        firstName: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^\s*[a-zA-Z0-9,\s]+\s*$/)]],
        lastName: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^\s*[a-zA-Z0-9,\s]+\s*$/)]],
        email: ['', [Validators.required, Validators.email]],
        payment: [this.payments[0], Validators.required],
        address: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^\s*[a-zA-Z0-9,\s]+\s*$/)]],
        county: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^\s*[a-zA-Z0-9,\s]+\s*$/)]],
        zip: ['', [Validators.required, Validators.maxLength(6), Validators.pattern(/^\s*[a-zA-Z0-9,\s]+\s*$/)]]
        });

        this.orderRow = this.mapCart();


        // this.control.valueChanges.subscribe(() => {
        //     const controlErrors = this.control.errors;
        //     if (controlErrors) {
        //         console.log(controlErrors);
        //     }
        // });
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



