import { Loan } from 'src/app/models/loan';
import { DataService } from './../../services/data.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as loansActions from './../actions/loans.actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class LoansEffects {
  constructor(private actions: Actions, private dataService: DataService) {}

  @Effect()
  getLoansList = this.actions.pipe(
    ofType(loansActions.GET_LOANS_LIST),
    switchMap((action: loansActions.GetLoansList) => {
      const ratingsStringified = JSON.stringify([action.payload]);

      return this.dataService
        .getLoans(ratingsStringified)
        .pipe(map((loans: Loan[]) => new loansActions.SetLoans(loans)));
    })
  );
}
