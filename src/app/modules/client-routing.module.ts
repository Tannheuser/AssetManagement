import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndividualDetailsComponent } from '../components/client/individual-details/individual-details.component';
import { RegisterIndividualComponent } from '../components/client/register-individual/register-individual.component';

const routes: Routes = [
  { path: 'register', component: RegisterIndividualComponent},
  { path: ':id', component: IndividualDetailsComponent},
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
