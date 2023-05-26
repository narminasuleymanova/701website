import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondGroupComponent } from './second-group.component';

describe('SecondGroupComponent', () => {
  let component: SecondGroupComponent;
  let fixture: ComponentFixture<SecondGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondGroupComponent]
    });
    fixture = TestBed.createComponent(SecondGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
