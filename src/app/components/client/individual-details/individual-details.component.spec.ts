import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualDetailsComponent } from './individual-details.component';
import { NaturalPerson } from '../../../model/natural-person';

describe('IndividualDetailsComponent', () => {
  let component: IndividualDetailsComponent;
  let fixture: ComponentFixture<IndividualDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render person data', () => {
    const person = new NaturalPerson();
    person.firstName = 'John';
    person.lastName = 'Doe';
    person.initials = 'J.A.';
    component.person = person;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card-title>span').textContent).toContain('John Doe [J.A.]');
  });
});
