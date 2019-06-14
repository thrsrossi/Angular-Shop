import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { CartService } from 'src/app/services/cart.service';

describe('ModalComponent', () => {

    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;

    beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      providers: [ CartService ]
    })
    .compileComponents();
  }));

    beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should create', () => {
    expect(component).toBeTruthy();
  });
    it('should add to quantity', () => {
    expect(component.quantityValue).toBe(1);
    component.addValue();
    expect(component.quantityValue).toBe(2);
  });
    it('should remove from quantity', () => {
    expect(component.quantityValue).toBe(1);
    component.addValue();
    expect(component.quantityValue).toBe(2);
    component.removeValue();
    expect(component.quantityValue).toBe(1);
  });
    it('should never remove below 0 from quantity', () => {
    expect(component.quantityValue).toBe(1);
    component.removeValue();
    expect(component.quantityValue).toBe(0);
    component.removeValue();
    expect(component.quantityValue).toBe(0);
  });

});
