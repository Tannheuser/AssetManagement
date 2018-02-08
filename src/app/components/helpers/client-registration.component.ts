import { Router } from '@angular/router';

export class ClientRegistrationComponent {
  constructor(private router: Router) {}

  registerClient() {
    this.router.navigate(['clients']);
  }
}
