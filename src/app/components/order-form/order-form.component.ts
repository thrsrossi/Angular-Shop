import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IOrder } from 'src/app/interfaces/IOrder';
import { IOrderRow } from 'src/app/interfaces/IOrderRow';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {


private order: IOrder;
private orderRow: IOrderRow;


orderForm: FormGroup = this.formBuilder.group({
        userName: ['', Validators.required],
        userEmail: ['', Validators.required],
        id: [0]
    });


  constructor(private formBuilder: FormBuilder) { }

  setUserValues() {
    // this.name.setValue('Nancy');
    console.log('submit');
  }

ngOnInit() {
  }


//   get MovieName() {
//       return this.searchForm.get('movieName') as FormControl;
//   }
    // movieSearch() {
    //     this.searchService.searchThis(this.movieName.value);
    // }
    // searchForm: FormGroup = this.fb.group({
    //     movieName:[''];
    // });


}
