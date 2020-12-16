import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeesDataService } from '../employees-data.service';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-create-form',
  templateUrl: './employee-create-form.component.html',
  styleUrls: ['./employee-create-form.component.scss']
})
export class EmployeeCreateFormComponent implements OnInit {
  employeeForm: FormGroup;

  @Input() employee: Employee;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeesService,
    private employeesDataService: EmployeesDataService) {

    this.employeeForm = this.fb.group({
      //id: this.fb.control(''),
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      dependents: this.fb.array([])
    });
  }

  ngOnInit(): void {
    console.log(this.employeeForm.controls['dependents']);
  }

  deleteDependent(dependent: FormControl) {
    const dependents = this.employeeForm.get('dependents') as FormArray;
    dependents.removeAt(dependents.controls.indexOf(dependent));
  }

  createEmployee(value: FormGroup) {
    this.employeeService.create(value.value).subscribe((employee: Employee) => {
      this.employeesDataService.updateEmployee(employee);
    });
  }

  addNewDependent() {
    const dependents = this.employeeForm.get('dependents') as FormArray;
    dependents.push(this.fb.group({
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
    }));
  }
}
