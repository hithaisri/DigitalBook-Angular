import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AddbookComponent } from './Components/addbook/addbook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SearchBooksComponent } from './Components/search-books/search-books.component';
import { LoginComponent } from './Components/login/login.component';
import { ShowBooksComponent } from './Components/show-books/show-books.component';
import { UpateBookComponent } from './Components/update-book/upate-book.component';
import { AuthorHeaderComponent } from './Components/author-header/author-header.component';
import { ReaderHeaderComponent } from './Components/reader-header/reader-header.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { ShowBooksReaderComponent } from './Components/show-books-reader/show-books-reader.component';
import { CartDetailsComponent } from './Components/cart-details/cart-details.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddbookComponent,
    SignUpComponent,
    SearchBooksComponent,
    LoginComponent,
    ShowBooksComponent,
    UpateBookComponent,
    AuthorHeaderComponent,
    ReaderHeaderComponent,
    LogoutComponent,
    ShowBooksReaderComponent,
    CartDetailsComponent,
    CheckoutComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
