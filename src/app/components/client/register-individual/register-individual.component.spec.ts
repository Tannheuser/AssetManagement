import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterIndividualComponent } from './register-individual.component';

describe('RegisterIndividualComponent', () => {
  let component: RegisterIndividualComponent;
  let fixture: ComponentFixture<RegisterIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('component should be created', () => {
    expect(component).toBeTruthy();
  });
});
