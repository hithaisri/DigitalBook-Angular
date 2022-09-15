import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Book from './entity/Book';
import CartItem from './entity/CartItem';
import { Subject } from 'rxjs';


const BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  paramUrl: string = "";

  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  saveBook(book: {
    id: number;
    title: string;
    category: string;
    publisher: string;
    price: number;
    content: string;
    image: string;
    active: boolean;
  }) {
    return this.http.post(BASE_URL + "/book/saveBook", book, { responseType: "text" });
  }

  getBooks() {
    return this.http.get(BASE_URL + "/book/getAllBooks");
  }

  deleteAllBooks() {
    return this.http.delete(BASE_URL + "/book/deleteAllBooks");
  }

  updateStudent(id: number, book: Book) {
    return this.http.put(BASE_URL+"/book/updateBook/"+id, book, { responseType: "text" });
  }

  deleteBook(book: any) {
    return this.http.delete(BASE_URL + "/book/deleteBook/"+book.id, { responseType: "text" });
  }

  saveUser(user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    role: number;
  }) {
    return this.http.post(BASE_URL + "/user", user, { responseType: "text" });
  }

  userLogin(user) {
    return this.http.post(BASE_URL + "/user/login", user, { responseType: "text" });
  }

  searchBooks(book) {

    if (typeof book.title === "string" && book.title.trim().length != 0)
      this.paramUrl = "/book/search?title=" + book.title;
    else if (typeof book.author === "string" && book.author.trim().length != 0)
      this.paramUrl = "/book/search?author=" + book.author;
    else if (book.price > 0)
      this.paramUrl = "/book/search?price=" + book.price;

      return this.http.get(BASE_URL + this.paramUrl );
  }

  addToCart(theCartItem: CartItem){
    //check already item in the cart 
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;
    
    if(this.cartItems.length > 0){
      //find the item in the cart based on id

      existingCartItem = this.cartItems.find( tempCartItem => tempCartItem.id === theCartItem.id);

      //check if we found it
      alreadyExistsInCart = (existingCartItem != undefined)
    } 

    if(alreadyExistsInCart){
      //increment the quantity
      existingCartItem.quantity++;
    }else {
      //add to cart item array
      this.cartItems.push(theCartItem);
    }

    this.calculateTotalPrice();
  }
  
  calculateTotalPrice() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for(let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    console.log(`Total price: ${totalPriceValue}, Total quantity: ${totalQuantityValue}`);
    
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }

  decrementQuantity(cartItem: CartItem){
    cartItem.quantity--;

    if (cartItem.quantity === 0) {
      this.remove(cartItem);
    }else {
      this.calculateTotalPrice();
    }
  }

  remove(cartItem: CartItem){
    const itemIndex = this.cartItems
                          .findIndex(
                            tempCartItem => tempCartItem.id === cartItem.id
                          );

    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);
      this.calculateTotalPrice();
    }
  }
  
  constructor(public http: HttpClient) { }
}
