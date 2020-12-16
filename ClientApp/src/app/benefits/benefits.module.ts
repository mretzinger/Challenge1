import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { MatCardModule } from '@angular/material/card';
import { CostCalcButtonComponent } from './cost-calc-button/cost-calc-button.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [TotalCostComponent, CostCalcButtonComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    TotalCostComponent,
    CostCalcButtonComponent
  ]
})
export class BenefitsModule { }
