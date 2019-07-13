import * as loansActions from './../actions/loans.actions';
import { Loan } from './../../models/loan';

export interface State {
  loans: Loan[];
  loanDetail: Loan;
}

export const initialState: State = {
  loans: [],
  loanDetail: null
};

export function reducer(
  state = initialState,
  action: loansActions.LoansActions
) {
  switch (action.type) {
    case loansActions.SET_LOANS:
      return {
        ...state,
        loans: action.payload
      };

    case loansActions.SET_LOAN_DETAIL:
      return {
        ...state,
        loanDetail: action.payload
      };
  }

  return state;
}
