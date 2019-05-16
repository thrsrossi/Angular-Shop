import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCartContainerComponent } from './print-cart-container.component';

describe('PrintCartContainerComponent', () => {
  let component: PrintCartContainerComponent;
  let fixture: ComponentFixture<PrintCartContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintCartContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintCartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
