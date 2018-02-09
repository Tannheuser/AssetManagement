import { Component, Input, OnInit } from '@angular/core';

import { NaturalPerson } from '../../../model/natural-person';

@Component({
  selector: 'am-individual-details-card',
  templateUrl: './individual-details-card.component.html',
  styleUrls: ['./individual-details-card.component.scss']
})
export class IndividualDetailsCardComponent implements OnInit {
  @Input() person: NaturalPerson;

  constructor() {
  }

  ngOnInit() {
  }
}
