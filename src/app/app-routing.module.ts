import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoansPageComponent } from './pages/loans-page.component';
import { LoansListComponent } from './components/loans-list/loans-list.component';
import { LoanDetailComponent } from './components/loan-detail/loan-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LoansPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: LoansListComponent
      },
      {
        path: 'detail',
        component: LoanDetailComponent
      }
    ]
  }
];

export const routedComponents = [
  LoansPageComponent,
  LoansListComponent,
  LoanDetailComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
