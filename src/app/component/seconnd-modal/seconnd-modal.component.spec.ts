import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconndModalComponent } from './seconnd-modal.component';

describe('SeconndModalComponent', () => {
  let component: SeconndModalComponent;
  let fixture: ComponentFixture<SeconndModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeconndModalComponent]
    });
    fixture = TestBed.createComponent(SeconndModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
