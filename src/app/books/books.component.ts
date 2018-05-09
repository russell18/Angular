import { Component, OnInit } from '@angular/core';
 
 import {FictionHttpService} from "../fiction-http.service";
import { ActivatedRoute, Router } from '@angular/router';
 

 

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
 
})
export class BooksComponent implements OnInit {

  public  allBooks=[];
  
  constructor(private  _route:ActivatedRoute,private router:Router,public fictionHttpService :FictionHttpService) {
    console.log("book component constructor called");
   }

  ngOnInit() {

    console.log("books component Init  called");
 

    this.allBooks=this.fictionHttpService.getAllBooks().subscribe(
      
      data =>{

        console.log("logging data");
        console.log(data);
        this.allBooks=data["data"];
      },

      error=>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    
    )
  }

}
