import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCalcButtonComponent } from './cost-calc-button.component';

describe('CostCalcButtonComponent', () => {
  let component: CostCalcButtonComponent;
  let fixture: ComponentFixture<CostCalcButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostCalcButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostCalcButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
