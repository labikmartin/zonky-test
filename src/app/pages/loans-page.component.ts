import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'zonky-loans-page',
  template: `
    <div>Hello from Loans Page</div>

    <div>{{ 'yolo' | translate }}</div>

    <div *ngFor="let loan of loans | async">
      {{ loan | json }}
    </div>

    <router-outlet></router-outlet>
  `
})
export class LoansPageComponent implements OnInit {
  loans: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('Hello from Loans Page');

    this.loans = this.http.get('/api/loans/marketplace?rating__in=[AAAAA]');
  }
}
