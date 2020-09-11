import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path:'dashboard', component: DashboardComponent,
  },
  {
    path:'register', component: RegisterComponent,
  },
  {
    path:'transactionDetails', component: TransactionDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
