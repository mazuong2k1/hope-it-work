import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confirm1Component } from './confirm1.component';

describe('Confirm1Component', () => {
  let component: Confirm1Component;
  let fixture: ComponentFixture<Confirm1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Confirm1Component]
    });
    fixture = TestBed.createComponent(Confirm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
