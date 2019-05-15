import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PrintMoviesComponent } from './components/print-movies/print-movies.component';
import { ModalComponent } from './components/modal/modal.component';
import { CartComponent } from './components/cart/cart.component';
import { DataService } from './services/data.service';
import { AddToCartService } from './services/add-to-cart.service';
import { MockDataService } from './services/mock-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrintMoviesComponent,
    ModalComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ DataService, AddToCartService, MockDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
