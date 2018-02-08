import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ClientRegistrationComponent } from './components/helpers/client-registration.component';

@Component({
  selector: 'am-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent extends ClientRegistrationComponent {
  constructor(router: Router) {
    super(router);
  }
}
