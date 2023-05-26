import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdGroupComponent } from './third-group.component';

describe('ThirdGroupComponent', () => {
  let component: ThirdGroupComponent;
  let fixture: ComponentFixture<ThirdGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdGroupComponent]
    });
    fixture = TestBed.createComponent(ThirdGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
