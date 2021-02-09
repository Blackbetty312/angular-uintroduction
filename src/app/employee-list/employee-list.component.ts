import { Component, OnInit } from "@angular/core";
import { EmployeeModel } from "../employee-model";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: EmployeeModel[];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this.employeeService
      .getAllEmployees()
      .subscribe(employees => (this.employees = employees.data));
  }
}
