import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintMoviesComponent } from './print-movies.component';
import { Component } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';

describe('PrintMoviesComponent', () => {

    @Component({
    selector: `host-component`,
    template: `<app-print-movies [movie]="{id: 6, name: 'hej', description: 'string', price: 589, imageUrl: 'imageUrl', year: 8898, added: 'string', productCategory: []}"></app-print-movies>`
    })
    class TestHostComponent {
    movie: IMovie;

    setInput(newInput: IMovie) {
        this.movie = newInput;
    }
    }

    let testHostComponent: TestHostComponent;
    let testHostFixture: ComponentFixture<TestHostComponent>;
//   let component: PrintMoviesComponent;
//   let fixture: ComponentFixture<PrintMoviesComponent>;

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
    // fixture = TestBed.createComponent(PrintMoviesComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

    it('should show movie image on home page', () => {
    expect(testHostFixture.nativeElement.querySelector('.image-box>img').src).toContain('imageUrl');
  });

    it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });


});
