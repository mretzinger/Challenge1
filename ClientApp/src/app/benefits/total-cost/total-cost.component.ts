import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { EmployeesDataService } from '../../employees/employees-data.service';
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

  constructor(
    private benefitsService: BenefitsService,
    private benefitsDataService: BenefitsDataService,
    private employeeDataService: EmployeesDataService) { }

  /*
  * Gets the current total cost of benefits and updates the cost based on any changes
  */
  ngOnInit(): void {
    this.benefitsDataService.benefitsCost$.subscribe((cost: BenefitsCost) => {
      this.cost = cost;
    });

    this.benefitsService.getCost().subscribe((cost: BenefitsCost) => {
      this.benefitsDataService.updateBenefits(cost);
    });

    this.employeeDataService.employees$.pipe(
      switchMap(() => this.benefitsService.getCost())
    ).subscribe((cost: BenefitsCost) => {
      this.benefitsDataService.updateBenefits(cost);
    });
  }

}
