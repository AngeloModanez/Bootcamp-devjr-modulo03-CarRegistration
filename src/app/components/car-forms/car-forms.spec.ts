import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarForms } from './car-forms';

describe('CarForms', () => {
  let component: CarForms;
  let fixture: ComponentFixture<CarForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
