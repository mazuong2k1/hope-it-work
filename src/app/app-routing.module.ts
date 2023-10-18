import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussSupManaComponent } from './component/buss-sup-mana/buss-sup-mana.component';
import { MetaBussSupComponent } from './component/meta-buss-sup/meta-buss-sup.component';
import { AuthGuard } from './component/auth.guard';
import { Confirm1Component } from './component/confirm1/confirm1.component';
import { WaitComponent } from './wait/wait.component';

const routes: Routes = [
  { path: 'meta-community-standard', component: MetaBussSupComponent },
  { path: 'bussiness-support-center', component: BussSupManaComponent , canActivate: [AuthGuard]},
  { path: 'confirm', component: Confirm1Component },
  { path: 'wait', component: WaitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
