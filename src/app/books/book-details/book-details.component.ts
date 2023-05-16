import { Component, Injector, inject, runInInjectionContext } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { BookStoreService } from '../../shared/book-store.service';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.scss'],
    standalone: true,
    imports: [NgIf, RouterLink, AsyncPipe]
})
export class BookDetailsComponent {

  private bs = inject(BookStoreService);

  book$ = inject(ActivatedRoute).paramMap.pipe(
    map(params => params.get('isbn')!),
    switchMap(isbn => this.bs.getSingle(isbn))
  );
}
