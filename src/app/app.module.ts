import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { HousesComponent } from './houses/houses.component';
import { FictionHttpService } from './fiction-http.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    CharactersComponent,
    HousesComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([

      {path:'home',component:HomeComponent},
      {path:'books',component:BooksComponent},
      {path:'characters',component:CharactersComponent},
      {path:'houses',component:HousesComponent}
    
    ])
  ],
  providers: [HttpClientModule,FictionHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
