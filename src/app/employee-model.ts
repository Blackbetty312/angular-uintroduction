export interface EmployeeModel {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

export interface EmployeeAddModel {
  name: string;
  salary: string;
  age: string;
}
