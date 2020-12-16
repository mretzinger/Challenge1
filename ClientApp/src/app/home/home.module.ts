import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { BenefitsModule } from '../benefits/benefits.module';
import { EmployeesModule } from '../employees/employees.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BenefitsModule,
    EmployeesModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
