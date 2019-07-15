import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromLoans from './loans.reducers';

export interface State {
  loans: fromLoans.State;
}

export const reducers: ActionReducerMap<State> = {
  loans: fromLoans.reducer
};

export const getLoansState = createFeatureSelector<fromLoans.State>('loans');

export const getLoansList = createSelector(
  getLoansState,
  fromLoans.getLoansList
);

export const getLoanDetail = createSelector(
  getLoansState,
  fromLoans.getLoanDetail
);

export const getLoanLoading = createSelector(
  getLoansState,
  fromLoans.getLoanLoading
);

export const getSelectedRating = createSelector(
  getLoansState,
  fromLoans.getSelectedRating
);
