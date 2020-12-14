import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employees } from './employee';

@Injectable({
  providedIn: 'root'
})
export class BenefitsService {

  constructor(private httpClient: HttpClient) { }

  update(employees: Employees) {
    //this.httpClient.post('/Employee/GetCostPreview', employees);
    console.log(employees);
  }
}
