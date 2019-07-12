import { BehaviorSubject, Subject } from 'rxjs';
import { DataService } from './../../services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Loan } from 'src/app/models/loan';

@Component({
  selector: 'zonky-loans-list',
  template: `
    <div>Henlo from Loans List</div>

    <div>
      Average loan: {{ avgLoanAmount | currency: 'CZK':'code':null:'cs' }}
    </div>

    <div *ngFor="let loan of loans">
      {{ loan | json }}
    </div>
  `
})
export class LoansListComponent implements OnInit {
  loans: Loan[];
  avgLoanAmount: number;

  private unsubscribe = new Subject();

  constructor(private dataService: DataService) {
    this.dataService.loans.subscribe(loans => {
      this.loans = loans;
      this.avgLoanAmount = this.calcAvgLoanAmount();
    });
  }

  ngOnInit() {}

  calcAvgLoanAmount() {
    if (!this.loans.length) {
      return;
    }

    const loansSum = this.loans.reduce((a: number, b: Loan) => {
      return a + b.amount;
    }, 0);
    const avgLoan = loansSum / this.loans.length;

    return avgLoan;
  }
}
