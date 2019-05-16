import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCartItemsComponent } from './print-cart-items.component';

describe('PrintCartItemsComponent', () => {
  let component: PrintCartItemsComponent;
  let fixture: ComponentFixture<PrintCartItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintCartItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintCartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
