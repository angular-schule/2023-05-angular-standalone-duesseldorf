import { Component, Injector, Input, inject, runInInjectionContext } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subject, map, switchMap, takeUntil } from 'rxjs';

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

  @Input() isbn?: string;

  private destroy$ = new Subject<void>()

  private bs = inject(BookStoreService);

  book$ = inject(ActivatedRoute).paramMap.pipe(
    map(params => params.get('isbn')!),
    switchMap(isbn => this.bs.getSingle(isbn)),
    takeUntil(this.destroy$)
  );

  constructor() {
    this.book$.subscribe(e => console.log(e));
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
