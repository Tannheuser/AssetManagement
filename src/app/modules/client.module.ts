import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from './shared.module';

import { ClientService } from '../services/client.service';
import { ClientDataService } from '../services/client-data.service';

import { ClientEffects } from '../effects/client.effects';
import { IndividualDetailsComponent } from '../components/client/individual-details/individual-details.component';
import { IndividualDetailsCardComponent } from '../components/client/individual-details-card/individual-details-card.component';
import { RegisterIndividualComponent } from '../components/client/register-individual/register-individual.component';

@NgModule({
  declarations: [
    IndividualDetailsComponent,
    IndividualDetailsCardComponent,
    RegisterIndividualComponent
  ],
  imports: [
    ClientRoutingModule,
    EffectsModule.forFeature([ClientEffects]),
    FormsModule,
    SharedModule
  ],
  exports: [],
  providers: [ClientService, ClientDataService]
})
export class ClientModule {
}
