import { Loan } from './../../models/loan';
import { Action } from '@ngrx/store';

export const GET_LOANS_LIST = '[Loans] Get Loans List';
export const SET_LOANS = '[Loans] Set Loans';
export const SET_LOAN_DETAIL = '[Loans] Set Loan Detail';

export class GetLoansList implements Action {
  readonly type = GET_LOANS_LIST;
  constructor(public payload: string) {}
}

export class SetLoans implements Action {
  readonly type = SET_LOANS;
  constructor(public payload: Loan[]) {}
}

export class SetLoanDetail implements Action {
  readonly type = SET_LOAN_DETAIL;
  constructor(public payload: Loan) {}
}

export type LoansActions = GetLoansList | SetLoans | SetLoanDetail;
