import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualDetailsCardComponent } from './individual-details-card.component';

describe('IndividualDetailsCardComponent', () => {
  let component: IndividualDetailsCardComponent;
  let fixture: ComponentFixture<IndividualDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualDetailsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
