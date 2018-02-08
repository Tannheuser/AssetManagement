import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientRegistrationComponent } from '../helpers/client-registration.component';

@Component({
  selector: 'am-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ClientRegistrationComponent implements OnInit {

  constructor(router: Router) {
    super(router);
  }

  ngOnInit() {
  }
}
