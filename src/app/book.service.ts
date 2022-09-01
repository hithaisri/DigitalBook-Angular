import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:8081';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  saveBook(book: {
    title:string;
    category:string;
    publisher:string;
    price:number;
    content:string;
    image:string;
   
    
    
  }) {
    return this.http.post(BASE_URL+"/saveBook", book);
  }


  constructor(public http: HttpClient) { }
}
