import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { EmployeeEditFormComponent } from './employee-edit-form/employee-edit-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeCreateFormComponent } from './employee-create-form/employee-create-form.component';


@NgModule({
  declarations: [EmployeesListComponent, EmployeeEditFormComponent, EmployeeCreateFormComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    EmployeesListComponent
  ]
})
export class EmployeesModule { }
