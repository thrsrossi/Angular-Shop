import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';
// , Output, EventEmitter

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    @Input() movieModal: IMovie;

  constructor() {}

  ngOnInit() {
  }

}
