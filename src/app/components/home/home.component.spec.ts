import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DataService } from '../../services/data.service';
import { MockDataService } from '../../services/mock-data.service';
import { PrintMoviesComponent } from '../print-movies/print-movies.component';
import { ModalComponent } from '../modal/modal.component';
import { IMovie } from 'src/app/interfaces/IMovie';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: DataService;
  let mockData: MockDataService;
  let movies: IMovie[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, PrintMoviesComponent, ModalComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .overrideComponent(HomeComponent, {set: { providers: [{provide: DataService, useClass: MockDataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(DataService);
    mockData = TestBed.get(MockDataService);
    movies = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('movies should be an array with three objects', () => {
    expect(component.movies.length).toBe(3);
  });
  it('allMoviesAlways should be an array with three objects', () => {
    expect(component.allMoviesAlways.length).toBe(3);
  });

  it('should get movie from print-movie-child and change variable and boolean', () => {
    expect(component.movieFromPrintMovie).toBeDefined();
    expect(component.modalToggle).toBeFalsy();

    component.setMovie(component.movies[0]);
    expect(component.modalToggle).toBeTruthy();
    expect(component.movieFromPrintMovie).toBe(component.movies[0]);
  });

  it('categories should be an array with three objects', () => {
    expect(component.categories.length).toBe(3);
  });
  it('it should change number of movies in movie array after category loop', () => {
    expect(component.movies.length).toBe(3);
    component.showMovieByCategoryId(5);
    expect(component.movies.length).toBe(1);
  });
  it('getAll should set movies to full/default array', () => {
    expect(component.movies.length).toBe(3);
    component.showMovieByCategoryId(5);
    expect(component.movies.length).toBe(1);
    component.getAll();
    expect(component.movies.length).toBe(3);
  });
//   it('searchMovie should get movie(s) from search input string', () => {
//     expect(component.movies.length).toBe(3);
//     component.searchMovie('hopp');
//     expect(component.movies.length).toBe(1);
//     expect(component.movies[0].name).toBe('hopp');
//   });

});
