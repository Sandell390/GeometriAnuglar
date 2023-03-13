import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureCalculatorComponent } from './figure-calculator.component';

describe('FigureCalculatorComponent', () => {
  let component: FigureCalculatorComponent;
  let fixture: ComponentFixture<FigureCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigureCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigureCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
