import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from '../employees/employee';
import { BenefitsCost } from './benefits';

@Injectable({
  providedIn: 'root'
})
export class BenefitsService {
  private API_DOMAIN: string = "https://localhost:44340";

  constructor(private httpClient: HttpClient) { }

  /*
  * Returns total benefits cost from the API
  */
  getCost() : Observable<BenefitsCost> {
    return this.httpClient.get<BenefitsCost>(this.API_DOMAIN + '/benefits/cost');
  }
}
