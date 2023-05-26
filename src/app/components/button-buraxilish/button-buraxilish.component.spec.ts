import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBuraxilishComponent } from './button-buraxilish.component';

describe('ButtonBuraxilishComponent', () => {
  let component: ButtonBuraxilishComponent;
  let fixture: ComponentFixture<ButtonBuraxilishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonBuraxilishComponent]
    });
    fixture = TestBed.createComponent(ButtonBuraxilishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
