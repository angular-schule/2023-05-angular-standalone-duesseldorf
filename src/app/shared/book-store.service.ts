import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from './book';
import { myApiUrl } from 'src/token';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  // private apiUrl = 'https://api.angular.schule';
  private apiUrl = inject(myApiUrl);

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + '/books');
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + '/books/' + isbn)
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl + '/books', book);
  }

  search(term: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + '/books/search/' + term);
  }
}
