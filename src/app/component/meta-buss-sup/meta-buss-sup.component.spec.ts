import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaBussSupComponent } from './meta-buss-sup.component';

describe('MetaBussSupComponent', () => {
  let component: MetaBussSupComponent;
  let fixture: ComponentFixture<MetaBussSupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetaBussSupComponent]
    });
    fixture = TestBed.createComponent(MetaBussSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
