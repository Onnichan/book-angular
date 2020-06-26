import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls:['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:Book[];

  constructor(private bookService:BookService) { 
  }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    console.log(this.books);
  }

  showBooks(idex:number){
    console.log(idex);
  }

}
