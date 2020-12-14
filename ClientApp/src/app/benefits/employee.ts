export interface Employees {
  employees: Employee[]
}

export interface Employee {
  firstName: string,
  lastName: string,
  dependents: Dependent[]
}

export interface Dependent {
  firstName: string,
  lastName: string,
}
