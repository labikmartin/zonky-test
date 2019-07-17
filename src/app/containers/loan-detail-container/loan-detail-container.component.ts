import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import { first } from 'rxjs/operators';
import { Loan } from '../../models/loan';
import { RatingsEnum } from 'src/app/models/rating';

@Component({
  selector: 'zonky-loan-detail-container',
  styleUrls: ['./loan-detail-container.component.scss'],
  template: `
    <div class="flexGrid detail">
      <div class="c-12 detail__name">{{ loan.name }}</div>

      <div class="c-4 c-smd-12">
        <img src="/api{{ loan.photos[0]?.url }}" class="detail__img" />
      </div>

      <div class="c-8  c-smd-12">
        <div class="flexGrid">
          <div class="c-12 detail__title">{{ 'loan.amount' | translate }}</div>
          <div class="c-12">
            {{ loan.amount | currency: 'CZK':'code':null:'cs' }}
          </div>

          <div class="c-12 detail__title">
            {{ 'loan.remainingInvestment' | translate }}
          </div>
          <div class="c-12">
            {{ loan.remainingInvestment | currency: 'CZK':'code':null:'cs' }}
          </div>

          <div class="c-12 detail__title">{{ 'loan.rating' | translate }}</div>
          <div [ngClass]="loan.rating" class="c-12">
            {{ ratings[loan.rating] | number: null:'cs' }} %
          </div>

          <div class="c-12 detail__title">{{ 'loan.story' | translate }}</div>
          <div class="c-12">{{ loan.story }}</div>
        </div>
      </div>
    </div>
  `
})
export class LoanDetailContainerComponent implements OnInit {
  loan: Loan;

  ratings = RatingsEnum;

  constructor(private store: Store<fromStore.State>) {
    this.store
      .select(fromStore.getLoanDetail)
      .pipe(first())
      .subscribe(loan => {
        this.loan = loan;
      });
  }

  ngOnInit() {}
}
