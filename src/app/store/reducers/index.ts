import { ActionReducerMap } from '@ngrx/store';

import * as fromLoans from './loans.reducers';

export interface State {
  loans: fromLoans.State;
}

export const reducers: ActionReducerMap<State> = {
  loans: fromLoans.reducer
};
