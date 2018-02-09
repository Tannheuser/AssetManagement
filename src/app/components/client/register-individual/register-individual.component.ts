import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ClientService } from '../../../services/client.service';
import { NavigationComponent } from '../../helpers/navigation.component';
import { NaturalPerson } from '../../../model/natural-person';

@Component({
  selector: 'am-register-individual',
  templateUrl: './register-individual.component.html',
  styleUrls: ['./register-individual.component.scss']
})
export class RegisterIndividualComponent extends NavigationComponent implements OnInit, OnDestroy {
  private registrationSubscription: Subscription;

  @ViewChild('detailsForm') basicDetails: NgForm;
  person: NaturalPerson;
  registrationId: string;

  constructor(private clientService: ClientService, router: Router) {
    super(router);
  }

  ngOnInit() {
    this.registrationSubscription = this.clientService.registrationId.subscribe(
      registrationId => {
        if (registrationId) { this.registrationId = registrationId; }
      }
    );
  }

  ngOnDestroy() {
    this.registrationSubscription.unsubscribe();
  }

  fillPerson() {
    // this.person.firstName = this.basicDetails.value.firstName;
    // this.person.lastName = this.basicDetails.value.lastName;
    // this.person.sex = this.basicDetails.value.sex;
    // this.person.initials = this.basicDetails.value.initials;
    // this.person.dateOfBirth = this.basicDetails.value.birthday;
    // this.person.dateOfBirth = this.basicDetails.value.birthday;
    // this.person.dateOfBirth = this.basicDetails.value.birthday;
    this.person = {...this.basicDetails.value} as NaturalPerson;
  }

  registerPerson() {
    this.clientService.saveIndividual(this.person);
  }
}
