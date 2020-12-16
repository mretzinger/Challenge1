import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee, EmployeeCreate } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private API_DOMAIN: string = "https://localhost:44340";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API_DOMAIN + '/employee/getall');
  }

  get(employeeId: string): Observable<Employee> {
    return this.httpClient.get<Employee>(this.API_DOMAIN + '/employee/' + employeeId);
  }

  create(employee: EmployeeCreate): Observable<Employee> {
    return this.httpClient.post<Employee>(this.API_DOMAIN + '/employee/create', employee);
  }

  update(employee: Employee): Observable<Employee> {
    return this.httpClient.patch<Employee>(this.API_DOMAIN + '/employee/' + employee.id, employee);
  }

  delete(employeeId: string) : Observable<void> {
    return this.httpClient.delete<void>(this.API_DOMAIN + '/employee/delete/' + employeeId);
  }

  deleteDependent(dependentId: string): Observable<void> {
    return this.httpClient.delete<void>(this.API_DOMAIN + '/employee/deleteDependent/' + dependentId);
  }
}
