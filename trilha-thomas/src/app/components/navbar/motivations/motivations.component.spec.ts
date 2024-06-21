import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationsComponent } from './motivations.component';

describe('MotivationsComponent', () => {
  let component: MotivationsComponent;
  let fixture: ComponentFixture<MotivationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotivationsComponent]
    });
    fixture = TestBed.createComponent(MotivationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
