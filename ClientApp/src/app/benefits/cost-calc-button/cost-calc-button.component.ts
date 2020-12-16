import { Component, OnInit } from '@angular/core';
import { BenefitsCost } from '../benefits';
import { BenefitsDataService } from '../benefits-data.service';
import { BenefitsService } from '../benefits.service';

@Component({
  selector: 'app-cost-calc-button',
  templateUrl: './cost-calc-button.component.html',
  styleUrls: ['./cost-calc-button.component.scss']
})
export class CostCalcButtonComponent {

  constructor(private benefitsService: BenefitsService,
    private benefitsDataService: BenefitsDataService) { }

  calculateCost(): void {
    this.benefitsService.getCost().subscribe((cost: BenefitsCost) => {
      this.benefitsDataService.updateBenefits(cost);
    });
  }

}
