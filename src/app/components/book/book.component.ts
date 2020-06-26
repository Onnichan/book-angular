import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {BookService, Book} from '../../services/book.service';

@Component({
  selector:'app-book',
  templateUrl:'./book.component.html'
})

export class BookComponent implements OnInit{
  book:Book;
  constructor(private router:Router,private activeRoute:ActivatedRoute,private bookService:BookService){}

  ngOnInit(){
    this.activeRoute.params.subscribe(params=>{
      // console.log(typeof(params['name'])+ ":" + params['name']);
      this.book = this.bookService.SearchBook(params['name']);
    });
  }


}