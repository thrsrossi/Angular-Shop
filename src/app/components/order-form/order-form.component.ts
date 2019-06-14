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
    orderResponse: any;
    orderForm: FormGroup;
    formValues: IFormData;

    constructor(private formBuilder: FormBuilder, private cartService: CartService, private dataService: DataService, private router: Router, private orderService: OrderService) {
        this.cartContent = this.cartService.getCart();
        this.totalPrice = this.cartService.getTotalPrice();
    }

    onSubmit(event): void {
    event.preventDefault();
    this.placeOrder();
    this.postOrder();
    this.formValues = this.orderForm.value;
    // send cart and form input values to OrderConfirmedComponent via order service
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
    get county(): FormControl {
        return this.orderForm.get('county') as FormControl;
    }
    get zip(): FormControl {
        return this.orderForm.get('zip') as FormControl;
    }

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
    }

    postOrder() {
        this.dataService.postData(this.order).subscribe(
            POSTorder => {
                this.orderResponse = POSTorder;
                // send post response to orderConfirmedComponent via order service
                this.orderService.setPostResponse(this.orderResponse);
            },
            error => {
                console.log('Could not post');
            }
        );
    }

    ngOnInit() {
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

    mapCart(): any[] {
        // map cartContent array to fit orderRows interface for posting order
        return this.cartContent.map((item: ICartItem) => {
                return {
                    productId: item.movie.id,
                    amount: item.quantity
                };
        });
    }
}
