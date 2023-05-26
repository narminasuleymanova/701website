import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Why701Component } from './why701.component';

describe('Why701Component', () => {
  let component: Why701Component;
  let fixture: ComponentFixture<Why701Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Why701Component]
    });
    fixture = TestBed.createComponent(Why701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
