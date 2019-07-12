import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { DataService } from './../services/data.service';
import { Loan } from '../models/loan';

@Component({
  selector: 'zonky-loans-page',
  template: `
    <div>Hello from Loans Page</div>

    <div>{{ 'yolo' | translate }}</div>

    <div>Average loan: {{ avgLoan | currency: 'CZK':'code':null:'cs' }}</div>

    <div (click)="onLoanRatingChange('AAAAAA')">Test button</div>

    <div *ngFor="let loan of loans | async">
      {{ loan | json }}
    </div>

    <router-outlet></router-outlet>
  `
})
export class LoansPageComponent implements OnInit {
  loans: Observable<Loan[]>;
  avgLoan: number;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    console.log('Hello from Loans Page');
  }

  calcAvgLoanAmount() {
    this.loans.pipe(first()).subscribe(loans => {
      if (!loans.length) {
        return;
      }

      const loansSum = loans.reduce((a: number, b: Loan) => {
        return a + b.amount;
      }, 0);
      const avgLoan = loansSum / loans.length;

      this.avgLoan = avgLoan;
    });
  }

  onLoanRatingChange(loanRating: string) {
    this.loans = this.dataService.getLoans(loanRating);

    this.calcAvgLoanAmount();
  }
}
