import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';

const ROUTES:Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'books',component:BooksComponent},
  {path:'book/:name',component:BookComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
]

@NgModule({
  imports:[RouterModule.forRoot(ROUTES)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}