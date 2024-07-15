import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './transaction/transaction/transaction.component';

const routes: Routes = [
  { path: 'transactions-list', component: TransactionComponent },
  { path: '', redirectTo: '/transactions-list', pathMatch: 'full' },
  { path: '**', redirectTo: '/transactions-list' } 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
