import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromStore from '../store';
import { Loan } from '../models/loan';
import { RatingsEnum } from './../models/rating';

@Component({
  selector: 'zonky-loans-list-container',
  template: `
    <zonky-risk-rating-selection
      (onRatingChange)="onLoanRatingChange($event)"
    ></zonky-risk-rating-selection>

    <div>
      Average loan: {{ avgLoanAmount | currency: 'CZK':'code':null:'cs' }}
    </div>

    <div class="flexGrid flexGrid--m">
      <zonky-info-tile
        *ngFor="let loan of loans"
        (click)="onToDetail(loan)"
        [image]="'api' + loan.photos[0]?.url"
        [title]="loan.name"
        [subtitle]="loan.amount | currency: 'CZK':'code':null:'cs'"
        [content]="loan.story"
        class="c-4"
      >
        {{ loan.name }}: {{ loan.amount }}
      </zonky-info-tile>
    </div>

    <zonky-preloader *ngIf="loading"></zonky-preloader>
  `
})
export class LoansListContainerComponent implements OnInit, OnDestroy {
  loans: Loan[];
  avgLoanAmount: number;
  loading: boolean;

  private unsubscribe = new Subject<void>();

  constructor(private store: Store<fromStore.State>, private router: Router) {
    combineLatest(
      this.store.select(fromStore.getLoansList),
      this.store.select(fromStore.getLoanLoading)
    )
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(data => {
        const [loans, loading] = data;
        console.log('Loans List: ', loans);
        this.loans = loans;
        this.avgLoanAmount = this.calcAvgLoanAmount();

        console.log('Loading: ', loading);
        this.loading = loading;
      });
  }

  ngOnInit() {
    console.log('Hello from Loans Page');
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onLoanRatingChange(loanRating: RatingsEnum) {
    console.log('Loan Rating Changed > ', loanRating);
    this.store.dispatch(new fromStore.GetLoansList(loanRating));
  }

  onToDetail(loanDetail: Loan) {
    this.router.navigate(['/detail']);

    this.store.dispatch(new fromStore.SetLoanDetail(loanDetail));
  }

  calcAvgLoanAmount() {
    if (!this.loans.length) {
      return;
    }

    const loansSum = this.loans.reduce((a, b) => {
      return a + b.amount;
    }, 0);
    const avgLoan = loansSum / this.loans.length;

    return avgLoan;
  }
}
