import { Component, OnInit } from '@angular/core';

import { NavigationComponent } from '../../helpers/client-registration.component';
import { NaturalPerson } from '../../../model/natural-person';
import { PostalAddress } from '../../../model/postal-address';
import { Router } from '@angular/router';

@Component({
  selector: 'am-individual-details',
  templateUrl: './individual-details.component.html',
  styleUrls: ['./individual-details.component.scss']
})
export class IndividualDetailsComponent extends NavigationComponent implements OnInit {
  client = new NaturalPerson('John', 'Doe', 'J.D.');
  constructor(router: Router) {
    super(router);
  }

  ngOnInit() {
    this.client.sex = 'Male';
    this.client.phone = '';
    this.client.email = '';
    this.client.dateOfBirth = '';
    this.client.countryOfBirth = '';
    this.client.placeOfBirth = '';
    this.client.nationality = '';
    this.client.socialSecurityNumber = '';

    const address = new PostalAddress();
    this.client.address = address;
  }

}
