import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BookService } from 'src/app/book.service';
import CartItem from 'src/app/entity/CartItem';
import { CartDetailsComponent } from '../cart-details/cart-details.component';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  checkoutFormGroup: FormGroup;


  constructor(public formBuilder: FormBuilder,public bookService:BookService
    ,public cardDetails:CartDetailsComponent) { }

  ngOnInit() {
    this.cardDetails.cartDetails();
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      })
    })
     
  }

  onSubmit() {
    console.log('Purchase the books');
    console.log(this.checkoutFormGroup.get('customer').value);
    console.log("Emial is", this.checkoutFormGroup.get('customer').value.email);
  }

  purchase(){
    
  }

}