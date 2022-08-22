import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLectionComponent } from './panel-lection.component';

describe('PanelLectionComponent', () => {
  let component: PanelLectionComponent;
  let fixture: ComponentFixture<PanelLectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelLectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelLectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
