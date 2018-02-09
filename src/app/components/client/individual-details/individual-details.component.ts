import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ClientService } from '../../../services/client.service';
import { NaturalPerson } from '../../../model/natural-person';

@Component({
  selector: 'am-individual-details',
  templateUrl: './individual-details.component.html',
  styleUrls: ['./individual-details.component.scss']
})
export class IndividualDetailsComponent implements OnInit, OnDestroy {
  private personSubscription: Subscription;
  person: NaturalPerson;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.personSubscription = this.clientService.naturalPerson.subscribe(
      person => {
        if (person) { this.person = person; }
      }
    );

    this.route.params.subscribe(
      (params) => {
        const personId = params['id'];
        if (personId) { this.clientService.getIndividual(personId); }
      }
    );
  }

  ngOnDestroy() {
    this.personSubscription.unsubscribe();
  }
}
