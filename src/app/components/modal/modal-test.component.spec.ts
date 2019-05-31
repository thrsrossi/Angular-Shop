import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { Component } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';

describe('ModalComponent', () => {

    @Component({
        selector: `app-host-component`,
        template: `<app-modal [movieModal]="{id: 6, name: 'hej', description: 'string', price: 589, imageUrl: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80', year: 8898, added: 'string', productCategory: []}"></app-modal>`
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
    testHostComponent.setInput({id: 6, name: 'hej', description: 'string', price: 589, imageUrl: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80', year: 8898, added: 'string', productCategory: []});
    testHostFixture.detectChanges();
    // expect(testHostFixture.nativeElement.querySelector('div').innerText).toContain('hej');
    expect(testHostComponent.movie.name).toBe('hej');
    });

});
