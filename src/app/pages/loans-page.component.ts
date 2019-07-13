import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { DataService } from './../services/data.service';
import { Loan } from '../models/loan';
import { Store } from '@ngrx/store';
import * as fromRoot from './../store';
import { GetLoansList } from './../store';

@Component({
  selector: 'zonky-loans-page',
  template: `
    <div>Hello from Loans Page</div>

    <div>{{ 'yolo' | translate }}</div>

    <div (click)="onLoanRatingChange('AAAAAA')">Test button</div>

    <router-outlet></router-outlet>
  `
})
export class LoansPageComponent implements OnInit {
  constructor(
    private store: Store<fromRoot.State>,
    private dataService: DataService
  ) {}

  ngOnInit() {
    console.log('Hello from Loans Page');
  }

  onLoanRatingChange(loanRating: string) {
    this.store.dispatch(new GetLoansList('AAAAAA'));
    this.store.select('loans').subscribe(loans => {
      console.log('Loaaaans > ', loans);
    });
  }
}
