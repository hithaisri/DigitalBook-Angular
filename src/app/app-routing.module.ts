import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './Components/addbook/addbook.component';
import { AuthorHeaderComponent } from './Components/author-header/author-header.component';
import { CartDetailsComponent } from './Components/cart-details/cart-details.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { MyBooksComponent } from './Components/my-books/my-books.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SearchBooksComponent } from './Components/search-books/search-books.component';
import { ShowBooksReaderComponent } from './Components/show-books-reader/show-books-reader.component';
import { ShowBooksComponent } from './Components/show-books/show-books.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { UpateBookComponent } from './Components/update-book/upate-book.component';


const routes: Routes = [{path:'signup',component:SignUpComponent},
{path:'navbar',component:NavbarComponent},
{path:'header',component:AuthorHeaderComponent},
{path:'home',component:LoginComponent},
{path:'logout',component:LogoutComponent},
{path:'searchBook',component:SearchBooksComponent},
{path:'showBook',component:ShowBooksComponent},
{path:'showBookReader',component:ShowBooksReaderComponent},
{path:'myBooks',component:MyBooksComponent},
{path:'addbook',component:AddbookComponent},
{path:'updateBook',component:UpateBookComponent},
{path:'cartDetails',component:CartDetailsComponent},
{path:'checkout',component:CheckoutComponent},
{path:'',redirectTo:'/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
