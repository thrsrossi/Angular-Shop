import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IOrder } from 'src/app/interfaces/IOrder';
import { IOrderRow } from 'src/app/interfaces/IOrderRow';
import { ICartItem } from 'src/app/interfaces/ICartItem';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {


order: IOrder;
orderRow: IOrderRow;


orderForm: FormGroup = this.formBuilder.group({
        userName: ['', Validators.required],
        userEmail: ['', Validators.required],
        id: [0]
    });


  constructor(private formBuilder: FormBuilder) {
    let date=new Date();

    let today_date = date.getFullYear().toString()+'-'+(date.getMonth()+1).toString()+'-'+date.getDate().toString();
    //   let timestamp = new Date().toLocaleString();
    //   let timestamp = new Date();
      console.log(today_date);
    //   console.log(Math.round(+new Date()/1000));
    //   console.log(timestamp.toISOString());
  }

  setUserValues() {
    // this.name.setValue('Nancy');
    console.log('submit');
  }

  ngOnInit() {

    // this.cartToOrder = this.mapCart();
    // console.log(this.cartToOrder);

    }


//   mapCart() {
//       return this.cartContent.cartItems.map((item: ICartItem) => {
//             return {
//                 productId: item.movie.id,
//                 amount: item.quantity
//             }
//       });
//   }


}
