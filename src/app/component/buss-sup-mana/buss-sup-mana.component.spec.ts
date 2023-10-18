import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussSupManaComponent } from './buss-sup-mana.component';

describe('BussSupManaComponent', () => {
  let component: BussSupManaComponent;
  let fixture: ComponentFixture<BussSupManaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BussSupManaComponent]
    });
    fixture = TestBed.createComponent(BussSupManaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
