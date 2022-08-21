import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxSkillComponent } from './check-box-skill.component';

describe('CheckBoxSkillComponent', () => {
  let component: CheckBoxSkillComponent;
  let fixture: ComponentFixture<CheckBoxSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBoxSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
