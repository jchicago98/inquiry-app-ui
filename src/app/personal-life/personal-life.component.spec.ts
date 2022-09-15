import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLifeComponent } from './personal-life.component';

describe('PersonalLifeComponent', () => {
  let component: PersonalLifeComponent;
  let fixture: ComponentFixture<PersonalLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalLifeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
