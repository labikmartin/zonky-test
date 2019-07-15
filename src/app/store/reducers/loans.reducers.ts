import * as loansActions from './../actions/loans.actions';
import { Loan } from './../../models/loan';
import { RatingsEnum } from './../../models/rating';

export interface State {
  loans: Loan[];
  loanDetail: Loan;
  loading: boolean;
  selectedRating: RatingsEnum;
}

export const initialState: State = {
  loans: [],
  loanDetail: null,
  loading: false,
  selectedRating: null
};

export function reducer(
  state = initialState,
  action: loansActions.LoansActions
) {
  switch (action.type) {
    case loansActions.GET_LOANS_LIST:
      return {
        ...state,
        loans: [],
        loading: true,
        selectedRating: action.payload
      };

    case loansActions.SET_LOANS:
      return {
        ...state,
        loans: action.payload,
        loading: false
      };

    case loansActions.SET_LOAN_DETAIL:
      return {
        ...state,
        loanDetail: action.payload
      };
  }

  return state;
}

export const getLoansList = (state: State) => state.loans;
export const getLoanDetail = (state: State) => state.loanDetail;
export const getLoanLoading = (state: State) => state.loading;
export const getSelectedRating = (state: State) => state.selectedRating;
