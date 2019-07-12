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

    <div (click)="onLoanRatingChange('AAAAAA')">Test button</div>

    <router-outlet></router-outlet>
  `
})
export class LoansPageComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    console.log('Hello from Loans Page');
  }

  onLoanRatingChange(loanRating: string) {
    this.dataService
      .getLoans(loanRating)
      .pipe(first())
      .subscribe(loans => this.dataService.storeLoans(loans));
  }
}
