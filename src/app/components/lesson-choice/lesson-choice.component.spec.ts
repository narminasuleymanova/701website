import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonChoiceComponent } from './lesson-choice.component';

describe('LessonChoiceComponent', () => {
  let component: LessonChoiceComponent;
  let fixture: ComponentFixture<LessonChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessonChoiceComponent]
    });
    fixture = TestBed.createComponent(LessonChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
