import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'am-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  constructor(private router: Router) {}

  registerClient() {
    this.router.navigate(['clients']);
  }
}
