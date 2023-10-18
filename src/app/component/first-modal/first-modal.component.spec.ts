import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstModalComponent } from './first-modal.component';

describe('FirstModalComponent', () => {
  let component: FirstModalComponent;
  let fixture: ComponentFixture<FirstModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstModalComponent]
    });
    fixture = TestBed.createComponent(FirstModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
