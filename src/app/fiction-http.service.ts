import { Injectable } from '@angular/core';
 
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
 
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class FictionHttpService {
 
  public allBooks;
 
  public allcharacters;
 
  public allHouse;
 
  public baseUrl = "https://anapioficeandfire.com/api";

  constructor(private _http:HttpClient) {

    console.log("fiction-http service wass called");
  }

  //method to return all Books
  public getAllBooks(): any {
    let myResponse=this._http.get(this.baseUrl+'/books');
    console.log(myResponse);
    return myResponse;
  }
  public getAllCharacters(): any {
    let myResponse=this._http.get(this.baseUrl+'/characters');
    console.log(myResponse);
    return myResponse;
  }
  public getAllHouses(): any {
    let myResponse=this._http.get(this.baseUrl+'/houses');
    console.log(myResponse);
    return myResponse;
  }
  
  public handleError(err:HttpErrorResponse){
    console.log("handle http error response");
    console.log(err.message);
    return Observable.throw(err.message);
  }


 
}
