import { Component, OnInit, OnDestroy } from '@angular/core';
import { FictionHttpService } from '../fiction-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor() { 
    console.log("home componentt connstrucctor is called");
  }

  ngOnInit() {
    console.log("home componentt onInit is called")
  }

  ngOnDestroy() {
    console.log("home componentt onDestroy is called")
  }
}
