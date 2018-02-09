import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationComponent } from '../helpers/navigation.component';

@Component({
  selector: 'am-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends NavigationComponent implements OnInit {

  constructor(router: Router) {
    super(router);
  }

  ngOnInit() {
  }
}
