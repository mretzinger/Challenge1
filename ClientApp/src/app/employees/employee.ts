export interface Employees {
  employees: Employee[]
}

export interface Employee {
  id: string;
  firstName: string,
  lastName: string,
  finalBenefitsCost: number,
  dependents: Dependent[]
}

export interface EmployeeCreate extends Omit<Employee, "employeeId"> {
 
}

export interface Dependent {
  id: string;
  firstName: string,
  lastName: string,
}
