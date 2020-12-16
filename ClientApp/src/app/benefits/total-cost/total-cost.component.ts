import { Component, OnInit } from '@angular/core';
import { BenefitsCost } from '../benefits';
import { BenefitsDataService } from '../benefits-data.service';
import { BenefitsService } from '../benefits.service';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.scss']
})
export class TotalCostComponent implements OnInit {
  cost: BenefitsCost = {finalCost: 0, originalCost: 0};

  constructor(private benefitsService: BenefitsService, private benefitsDataService : BenefitsDataService) { }

  ngOnInit(): void {
    this.benefitsDataService.benefitsCost$.subscribe((cost: BenefitsCost) => {
      this.cost = cost;
    });

    this.benefitsService.getCost().subscribe((cost: BenefitsCost) => {
      this.benefitsDataService.updateBenefits(cost);
    });
  }

}
