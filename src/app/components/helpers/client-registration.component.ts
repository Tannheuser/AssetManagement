import { Router } from '@angular/router';

export class NavigationComponent {
  constructor(private router: Router) {
  }

  cancelRegistration() {
    this.router.navigate(['/']);
  }

  registerClient() {
    this.router.navigate(['clients', 'register']);
  }
}
