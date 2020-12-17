import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeesDataService } from '../employees-data.service';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-create-form',
  templateUrl: './employee-create-form.component.html',
  styleUrls: ['./employee-create-form.component.scss']
})
export class EmployeeCreateFormComponent {
  employeeForm: FormGroup;
  saveSuccess: string;

  @Input() employee: Employee;

  @Output() onSaveSuccess: EventEmitter<void> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeesService,
    private employeesDataService: EmployeesDataService) {

    this.employeeForm = this.fb.group({
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      dependents: this.fb.array([])
    });
  }

  /*
  * Removes a dependent from the employee form
  */
  deleteDependent(dependent: FormControl) {
    const dependents = this.employeeForm.get('dependents') as FormArray;
    dependents.removeAt(dependents.controls.indexOf(dependent));
  }

  /*
  * Saves a new employee and adds it to the existing employee array
  */
  createEmployee(value: FormGroup) {
    this.employeeService.create(value.value).subscribe((employee: Employee) => {
      this.employeesDataService.addEmployee(employee);
      this.saveSuccess = "Saved successfully!";
      this.onSaveSuccess.emit();
    });
  }

  /*
  * Adds a new empty dependent to an employee
  */
  addNewDependent() {
    const dependents = this.employeeForm.get('dependents') as FormArray;
    dependents.push(this.fb.group({
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
    }));
  }
}
