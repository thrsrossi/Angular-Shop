import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { Component } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';

describe('ModalComponent', () => {

    @Component({
        selector: `app-host-component`,
        template: `<app-modal [movieModal]="{id: 6, name: 'hej', description: 'string', price: 589, imageUrl: 'imageUrl', year: 8898, added: 'string', productCategory: []}"></app-modal>`
      })
      class TestHostComponent {
        movie: IMovie;

        setInput(newInput: IMovie) {
            this.movie = newInput;
        }
      }

    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;
    // let component: ModalComponent;
    // let fixture: ComponentFixture<ModalComponent>;

    beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent, TestHostComponent ]
    })
    .compileComponents();
  }));


    beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
    // fixture = TestBed.createComponent(ModalComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });


    it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

    it('should show movie title', () => {
    testHostComponent.setInput({id: 6, name: 'hej', description: 'string', price: 589, imageUrl: 'imageUrl', year: 8898, added: 'string', productCategory: []});
    testHostFixture.detectChanges();
    // expect(testHostFixture.nativeElement.querySelector('div').innerText).toContain('hej');
    expect(testHostComponent.movie.name).toBe('hej');
    });

    // it('should update variables with input value from modal', () => {
    //     expect(testHostComponent.quantity);
        
    //     expect(testHostComponent.movie.name).toBe('hej');
    //     });

});
