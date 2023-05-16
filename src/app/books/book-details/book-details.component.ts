import { Component, Injector, Input, inject, runInInjectionContext } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subject, interval, map, switchMap, takeUntil, timer } from 'rxjs';

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

  private bs = inject(BookStoreService);

  book$ = inject(ActivatedRoute).paramMap.pipe(
    map(params => params.get('isbn')!),
    switchMap(isbn => this.bs.getSingle(isbn)),
  );

  timer$ = interval(1000);

  constructor() {
    this.timer$.pipe(takeUntilDestroyed()).subscribe(e => console.log(e));
  }

}
