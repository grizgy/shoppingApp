import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantitySectionComponent } from './quantity-section.component';

describe('QuantitySectionComponent', () => {
  let component: QuantitySectionComponent;
  let fixture: ComponentFixture<QuantitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantitySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
