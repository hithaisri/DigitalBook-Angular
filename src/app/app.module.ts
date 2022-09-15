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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddbookComponent,
    SignUpComponent,
    SearchBooksComponent,
    LoginComponent,
    ShowBooksComponent,
    UpateBookComponent  ],
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
