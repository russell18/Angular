import { Component, OnInit } from '@angular/core';
import { FictionHttpService } from '../fiction-http.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  public  allHouses;
 
  constructor(public fictionHttpService:FictionHttpService) { }

  ngOnInit() {

    this.allHouses=this.fictionHttpService.getAllHouses().subscribe(
        data=>{
         
          console.log("constructor onInit called");
          console.log(data);;
          this.allHouses=data["data"];
        },

        error=>{
          console.log("some error  message");
          console.log(error.errorMessage);
        }

    )
  }

}
