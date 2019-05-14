import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {

    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;

    beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();
  }));


    beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should create', () => {
    expect(ModalComponent).toBeTruthy();
  });

    it('should set value from input', () => {
    expect(component.quantity).toBeUndefined();
    expect(component.movie).toBeUndefined();
    component.addToCart(3, 'hej');
    expect(component.quantity).toBe(3);
    expect(component.movie).toBe('hej');
  });



});
