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

    order: IOrder[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
