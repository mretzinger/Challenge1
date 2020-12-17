import { Component, OnInit } from '@angular/core';
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

  /*
   * Whether or not to show the "add an employee" form.
   */
  new: boolean = false;

  constructor(private employeesService: EmployeesService,
    private employeesDataService: EmployeesDataService) { }

  ngOnInit(): void {
    this.employeesDataService.employees$.subscribe((employees: Employee[]) => {
      this.employees = employees;
    });

    this.employeesService.getAll().subscribe((employees: Employee[]) => {
      this.employeesDataService.updateEmployees(employees);
    });
  }

  showNewEmployeeForm() {
    this.new = true;
  }

  hideNewEmployeeForm() {
    this.new = false;
  }

  deleteEmployee(employee : Employee) {
    this.employeesService.delete(employee.id).subscribe(() => {
      this.employeesDataService.deleteEmployee(employee);
    });
  }
}
