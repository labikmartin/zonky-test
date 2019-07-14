import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as fromStore from '../store';
import { map } from 'rxjs/operators';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoanDetailGuard implements CanActivate {
  constructor(private router: Router, private store: Store<fromStore.State>) {}

  canActivate() {
    return this.store.select(fromStore.getLoanDetail).pipe(
      map(loanDetail => {
        if (loanDetail) {
          return true;
        } else {
          this.router.navigate(['/list']);
          return false;
        }
      })
    );
  }
}
