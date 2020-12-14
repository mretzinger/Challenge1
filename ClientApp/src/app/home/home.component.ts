import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BenefitsService } from '../benefits/benefits.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  employees: FormGroup;
  employee : FormGroup;
  firstName = new FormControl();
  lastName = new FormControl();

  constructor(private fb: FormBuilder, private benefitsService: BenefitsService) {
    this.employee = this.fb.group({
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      dependents: this.fb.array([])
    });

    this.employees = this.fb.group({
      employees: this.fb.array([this.employee])
    });
  }

  addNewDependent() {
    const dependents = this.employee.get('dependents') as FormArray;
    dependents.push(this.fb.group({
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
    }));
  }

  addNewEmployee() {
    const employees = this.employees.get('employees') as FormArray;
    employees.push(this.fb.group({
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      dependents: this.fb.array([])
    }));
  }

  deleteDependent(dependent : FormControl) {
    const dependents = this.employee.get('dependents') as FormArray;
    dependents.removeAt(dependents.controls.indexOf(dependent));
  }

  updateEmployee(employee: FormGroup) {
    this.benefitsService.update(employee.value);
  }
}
