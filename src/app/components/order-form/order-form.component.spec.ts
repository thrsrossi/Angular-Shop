import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormComponent } from './order-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';

describe('OrderFormComponent', () => {
  let component: OrderFormComponent;
  let fixture: ComponentFixture<OrderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFormComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.orderForm.valid).toBeFalsy();
  });

  it('check email validator', () => {
    let errors = {};
    let email = component.orderForm.controls['email'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something wrong
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeTruthy();

    // Set email to something correct
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeFalsy();
});

//   it('submitting a form posts order', () => {
//     expect(component.orderForm.valid).toBeFalsy();
//     component.orderForm.controls['email'].setValue('test@test.com');
//     component.orderForm.controls['firstName'].setValue('Hejsan');
//     expect(component.orderForm.valid).toBeTruthy();

//     // Subscribe to the Observable and store the user in a local variable.
//     // component.postOrder(): Observable.subscribe((value) => user = value);

//     // Now we can check to make sure the emitted value is correct
//     expect(user.email).toBe("test@test.com");
//     expect(user.password).toBe("123456789");
//   });
});
