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

  /*
  * Returns all employees from the API
  */
  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API_DOMAIN + '/employee/getall');
  }

  /*
  * Returns one employee by the id with the API
  */
  get(employeeId: string): Observable<Employee> {
    return this.httpClient.get<Employee>(this.API_DOMAIN + '/employee/' + employeeId);
  }

  /*
  * Creates a new employee with the API
  */
  create(employee: EmployeeCreate): Observable<Employee> {
    return this.httpClient.post<Employee>(this.API_DOMAIN + '/employee/create', employee);
  }

  /*
  * Updates an existing employee with the API
  */
  update(employee: Employee): Observable<Employee> {
    return this.httpClient.patch<Employee>(this.API_DOMAIN + '/employee/' + employee.id, employee);
  }

  /*
  * Deletes an employee with the API
  */
  delete(employeeId: string) : Observable<void> {
    return this.httpClient.delete<void>(this.API_DOMAIN + '/employee/delete/' + employeeId);
  }

  /*
  * Deletes a dependent with the API
  */
  deleteDependent(dependentId: string): Observable<void> {
    return this.httpClient.delete<void>(this.API_DOMAIN + '/employee/deleteDependent/' + dependentId);
  }
}
