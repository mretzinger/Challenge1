import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesDataService {
  private employees: Employee[] = [];

  private _employees$: BehaviorSubject<Employee[]> = new BehaviorSubject(this.employees);

  employees$: Observable<Employee[]>;

  constructor() {
    this.employees$ = this._employees$.asObservable();
  }

  addEmployee(): void {
    this._employees$.next(
      [...this._employees$.value,
        {
          id: "",
          firstName: "",
          lastName: "",
          finalBenefitsCost: 0,
          dependents: []
        }
      ]
    )
  }

  updateEmployees(employees: Employee[]): void {
    this._employees$.next(employees);
  }

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
}
