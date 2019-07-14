import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoansListContainerComponent } from './containers/loans-list-container.component';
import { LoanDetailContainerComponent } from './containers/loan-detail-container.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: LoansListContainerComponent
  },
  {
    path: 'detail',
    component: LoanDetailContainerComponent
  }
];

export const routedComponents = [
  LoansListContainerComponent,
  LoanDetailContainerComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
