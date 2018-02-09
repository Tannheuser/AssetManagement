import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ClientService } from '../../../services/client.service';
import { NavigationComponent } from '../../helpers/navigation.component';
import { NaturalPerson } from '../../../model/natural-person';
import { PostalAddress } from '../../../model/postal-address';

@Component({
  selector: 'am-register-individual',
  templateUrl: './register-individual.component.html',
  styleUrls: ['./register-individual.component.scss']
})
export class RegisterIndividualComponent extends NavigationComponent implements OnInit, OnDestroy {
  private registrationSubscription: Subscription;

  @ViewChild('detailsForm') basicDetails: NgForm;
  @ViewChild('addressForm') addressDetails: NgForm;
  person: NaturalPerson;
  registrationId: string;
  genders: ListItem[] = [
    {key: 'M', value: 'Male'},
    {key: 'F', value: 'Female'}
  ];
  countries: ListItem[] = [
    {key: 'GE', value: 'Germany'},
    {key: 'FR', value: 'France'},
    {key: 'NDL', value: 'Netherlands'}
  ];

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

  fillAddress() {
    this.person = {
      ...this.person,
      email: this.addressDetails.value.email,
      phone: this.addressDetails.value.phone,
      address: {
        ...new PostalAddress(),
        line1: this.addressDetails.value.line1,
        line2: this.addressDetails.value.line2,
        postalCode: this.addressDetails.value.postalCode,
        city: this.addressDetails.value.city,
        country: this.addressDetails.value.country
      }
    };
  }

  fillPerson() {
    this.person = {...this.basicDetails.value} as NaturalPerson;
  }

  registerPerson() {
    this.clientService.saveIndividual(this.person);
  }
}

interface ListItem {
  key: string;
  value: string;
}
