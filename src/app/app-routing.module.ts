import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './Components/addbook/addbook.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SearchBooksComponent } from './Components/search-books/search-books.component';
import { ShowBooksComponent } from './Components/show-books/show-books.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { UpateBookComponent } from './Components/update-book/upate-book.component';


const routes: Routes = [{path:'signup',component:SignUpComponent},
{path:'navbar',component:NavbarComponent},
{path:'home',component:LoginComponent},
{path:'searchBook',component:SearchBooksComponent},
{path:'showBook',component:ShowBooksComponent},
{path:'addbook',component:AddbookComponent},
{path:'updateBook',component:UpateBookComponent},
{ path: '', redirectTo: 'home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
