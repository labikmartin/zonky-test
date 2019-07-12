import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from './../services/data.service';

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

  constructor(private dataService: DataService) {}

  ngOnInit() {
    console.log('Hello from Loans Page');

    this.loans = this.dataService.getLoans('AAAAAA');
  }
}
