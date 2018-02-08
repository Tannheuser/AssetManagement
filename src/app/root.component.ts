import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationComponent } from './components/helpers/client-registration.component';

@Component({
  selector: 'am-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent extends NavigationComponent {
  constructor(router: Router) {
    super(router);
  }
}
