import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/interfaces/IOrder';
import { DataService } from 'src/app/services/data.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    // order: IOrder;
    postResponse: any[];

  constructor(private dataService: DataService) {
      this.dataService.order$.subscribe(
          order => {
              this.postResponse = order;

              console.log('order in admin constructor postresponse', this.postResponse);
          }
      );

   }


//    postOrder() {
//     this.dataService.postData(this.order).subscribe(
//         POSTorder => {
//             this.orderResponse = POSTorder;
//             console.log('next value: ', POSTorder);
//             console.log('orderresponse', this.orderResponse);
//         },
//         error => {
//             console.log('error', error);
//         }
//     );
// }

  ngOnInit() {
  }

}
