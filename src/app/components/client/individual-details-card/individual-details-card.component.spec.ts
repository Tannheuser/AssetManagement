import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualDetailsCardComponent } from './individual-details-card.component';
import { SharedModule } from '../../../modules/shared.module';
import { MaterialModule } from '../../../modules/material.module';

describe('IndividualDetailsCardComponent', () => {
  let component: IndividualDetailsCardComponent;
  let fixture: ComponentFixture<IndividualDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, MaterialModule],
      declarations: [ IndividualDetailsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component should be created', () => {
    expect(component).toBeTruthy();
  });
});
