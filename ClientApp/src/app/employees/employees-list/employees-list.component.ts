import { Component, OnInit } from '@angular/core';
import { BenefitsCost } from '../../benefits/benefits';
import { BenefitsService } from '../../benefits/benefits.service';
import { Employee } from '../employee';
import { EmployeesDataService } from '../employees-data.service';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [];
  cost: BenefitsCost = { finalCost: 0, originalCost: 0 };

  constructor(private employeesService: EmployeesService,
    private benefitsService: BenefitsService,
    private employeesDataService: EmployeesDataService) { }

  ngOnInit(): void {
    this.employeesDataService.employees$.subscribe((employees: Employee[]) => {
      this.employees = employees;
    });

    this.employeesService.getAll().subscribe((employees: Employee[]) => {
      this.employeesDataService.updateEmployees(employees);
    });
  }

  addNewEmployee() {
    this.employeesDataService.addEmployee();
  }

  deleteEmployee(employee : Employee) {
    if (employee.id) {
      this.employeesService.delete(employee.id).subscribe(() => {
        this.employees.splice(this.employees.indexOf(employee));
      });
    }
    else {
      this.employees.splice(this.employees.indexOf(employee));
    }
  }

  calculateCost() {
    this.benefitsService.getCost().subscribe((cost: BenefitsCost) => {
      this.cost = cost;
      console.log(cost);
    });
  }
}
