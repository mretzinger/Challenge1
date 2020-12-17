import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BenefitsService } from '../../benefits/benefits.service';
import { Dependent, Employee } from '../employee';
import { EmployeesDataService } from '../employees-data.service';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-edit-form',
  templateUrl: './employee-edit-form.component.html',
  styleUrls: ['./employee-edit-form.component.scss']
})
export class EmployeeEditFormComponent implements OnInit {
  employeeForm: FormGroup;

  @Input() employee: Employee;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeesService,
    private employeesDataService: EmployeesDataService) {

    this.employeeForm = this.fb.group({
      id: this.fb.control(''),
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      dependents: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.employeeForm.patchValue(this.employee);
    this.employee.dependents.forEach((dependent: Dependent) => {
      const dependentsFormArray = this.employeeForm.get("dependents") as FormArray;
      dependentsFormArray.push(this.fb.group({ firstName: dependent.firstName, lastName: dependent.lastName, id: dependent.id }));
    });
  }

  /*
  * Adds an empty dependent to the employee form
  */
  addNewDependent() {
    const dependents = this.employeeForm.get('dependents') as FormArray;
    dependents.push(this.fb.group({
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
    }));
  }

  /*
  * Removes a dependent from the employee form
  */
  deleteDependent(dependent: FormControl) {
    const dependents = this.employeeForm.get('dependents') as FormArray;
    dependents.removeAt(dependents.controls.indexOf(dependent));
    this.employeeService.deleteDependent(dependent.value.id).subscribe(() => {
      console.log(this.employeeForm.value);
    });
  }

  /*
  * Saves any changes to an already existing employee
  */
  updateEmployee(value: FormGroup) {
    this.employeeService.update(value.value).subscribe((employee: Employee) => {
      this.employeesDataService.updateEmployee(employee);
    });
  }
}
