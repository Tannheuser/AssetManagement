import { NgModule } from '@angular/core';

import { ClientRoutingModule } from './client-routing.module';
import { MaterialModule } from './material.module';

import { IndividualDetailsComponent } from '../components/client/individual-details/individual-details.component';
import { RegisterIndividualComponent } from '../components/client/register-individual/register-individual.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    IndividualDetailsComponent,
    RegisterIndividualComponent
  ],
  imports: [
    ClientRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
  ]
})
export class ClientModule {}
