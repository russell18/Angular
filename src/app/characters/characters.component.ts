import { Component, OnInit } from '@angular/core';
import { FictionHttpService } from '../fiction-http.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public  allCharacters=[];
  constructor(public fictionHttpService:FictionHttpService) { 

  }

  ngOnInit() {

   this.allCharacters=this.fictionHttpService.getAllCharacters().subscribe(

    data=>{
      
      console.log("logging data");
      console.log(data);
      this.allCharacters=data["data"];
    },

    error=>{
      
      console.log("error message");
      console.log(error.errorMessage);
      

    }
   )
  }

}
