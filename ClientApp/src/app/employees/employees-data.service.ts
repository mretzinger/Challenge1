import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesDataService {
  private _employees$: BehaviorSubject<Employee[]> = new BehaviorSubject([]);

  employees$: Observable<Employee[]>;

  constructor() {
    this.employees$ = this._employees$.asObservable();
  }

  /*
  * Adds a new employee to the employees state
  */
  addEmployee(employee: Employee): void {
    this._employees$.next(
      [
        ...this._employees$.value,
        employee
      ]
    )
  }

  /*
  * Updates the current employee list state with any changes
  */
  updateEmployees(employees: Employee[]): void {
    this._employees$.next(employees);
  }

  /*
  * Updates the current employee list state with an updated employee
  */
  updateEmployee(employee: Employee): void {
    this._employees$.next(this._employees$.value.map((data: Employee) => {
      if (data.id == employee.id) {
        return {
          ...employee
        }
      }
      else {
        return data;
      }
    }));
  }

  /*
  * Removes an employee from the current employees state
  */
  deleteEmployee(employee: Employee): void {
    var index = this._employees$.value.indexOf(employee);
    this._employees$.next([
      ...this._employees$.value.slice(0, index),
      ...this._employees$.value.slice(index + 1)
    ]);
  }
}
