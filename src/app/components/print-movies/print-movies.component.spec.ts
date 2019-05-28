import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintMoviesComponent } from './print-movies.component';
import { Component } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';

describe('PrintMoviesComponent', () => {

    @Component({
        selector: `host-component`,
        template: `<app-print-movies [movie]="{id: 6, name: 'hej', description: 'string', price: 589, imageUrl: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80', year: 8898, added: 'string', productCategory: []}"></app-print-movies>`
        })
        class TestHostComponent {
        movie: IMovie;

        setInput(newInput: IMovie) {
            this.movie = newInput;
        }
    }

    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintMoviesComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

    beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

    it('should show movie image on home page', () => {
    expect(testHostFixture.nativeElement.querySelector('.image-box>img').src).toContain('https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80');
  });

    it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });


});
