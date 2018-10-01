import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class GotHttpService {

  public allBooks;
  public allCharacters;
  public allHouses;
  public allItems;
  public baseUrl = 'https://www.anapioficeandfire.com/api';

  constructor(private _http: HttpClient) {

      console.log("HttpService is called.")
   }

   //exception handler
   private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }

  public getAllBooks(): any {
    let Books = this._http.get(this.baseUrl + '/books')
    return Books;
  }// end get all books 

  public getAllCharacters(): any {
    let Characters = this._http.get(this.baseUrl + '/characters')
    return Characters;
  }// end get all characters

  public getAllHouses(): any {
    let myResponseOfHouses = this._http.get(this.baseUrl + '/houses')
    return myResponseOfHouses;
  }// end get all houses

  public getSingleBookInfo(bookId): any{
    let bookId1 = this._http.get(this.baseUrl + '/books' + '/' + bookId)
    return bookId1;
  }//end get single Book info

  public getSingleCharacterInfo(characterId): any{
    let characterId1 = this._http.get(this.baseUrl + '/characters' + '/' + characterId)
    return characterId1;
  }//end get single character info

  public getSingleHouseInfo(houseId): any{
    let houseId1 = this._http.get(this.baseUrl + '/houses' + '/' + houseId)
    return houseId1;
  }//end get single house info
  
}

