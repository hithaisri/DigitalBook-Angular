import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import CartItem from 'src/app/entity/CartItem';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.cartDetails();
  }

  cartDetails(){
    this.cartItems = this.bookService.cartItems;

    this.bookService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    this.bookService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    this.bookService.calculateTotalPrice();
  }

  incrementQuantity(cartItem: CartItem){
    this.bookService.addToCart(cartItem);
  }

  decrementQuantity(cartItem: CartItem){
    this.bookService.decrementQuantity(cartItem);
  }

  remove(cartItem: CartItem){
    this.bookService.remove(cartItem);
  }

  purchase(cartItems: CartItem[]){
    console.log("purchase works!");
    this.bookService.purchaseItems(cartItems);
  }
}
