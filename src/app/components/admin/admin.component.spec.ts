import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { PrintOrdersComponent } from '../print-orders/print-orders.component';
import { DataService } from 'src/app/services/data.service';
import { MockDataService } from 'src/app/services/mock-data.service';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent, PrintOrdersComponent ]
    })
    .overrideComponent(AdminComponent, {set: { providers: [{provide: DataService, useClass: MockDataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be an array with two objects', () => {
    expect(component.orders.length).toBe(2);
  });
//   it('should update array length after deleting order', () => {
//     expect(component.orders.length).toBe(2);
//     component.deleteOrder(187);
//     expect(component.orders.length).toBe(1);

//   });
});
