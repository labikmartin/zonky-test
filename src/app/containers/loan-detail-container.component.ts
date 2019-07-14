import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromStore from '../store';
import { first } from 'rxjs/operators';
import { Loan } from '../models/loan';

@Component({
  selector: 'zonky-loan-detail-container',
  template: `
    <div>{{ loan | json }}<img src="/api{{ loan.photos[0]?.url }}" /></div>
  `
})
export class LoanDetailContainerComponent implements OnInit {
  loan: Loan;

  constructor(private store: Store<fromStore.State>) {
    this.store
      .select(fromStore.getLoanDetail)
      .pipe(first())
      .subscribe(loan => {
        console.log('Loan Detail: ', loan);
        this.loan = loan;
      });
  }

  ngOnInit() {}
}
