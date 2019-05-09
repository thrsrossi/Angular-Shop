import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DataService } from '../../services/data.service';
import { MockDataService } from '../../services/mock-data.service';
import { PrintMoviesComponent } from '../print-movies/print-movies.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, PrintMoviesComponent ]
    })
    .overrideComponent(HomeComponent, {set: { providers: [{provide: DataService, useClass: MockDataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be an array with three objects', () => {
    expect(component.movies.length).toBe(3);
  });

//   it('should store id from output decorator', () => {
//     expect(component.movieId).toBeFalsy();
//     component.getMovieId(3);
//     expect(component.movieId).toBe(3);
//   });

  it('should get single movie from array with id from child', () => {
    // expect(component.movieId).toBeFalsy();
    // component.getMovieId(3);
    // expect(component.movieId).toBe(3);
    expect(component.movieToModal).toBeUndefined();
    component.setMovieWithId(2);
    expect(component.movieToModal).not.toBe('undefined');
  });

});
