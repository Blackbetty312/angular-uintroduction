import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmployeeModel } from "../employee-model";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"]
})
export class EmployeeDetailsComponent implements OnInit {
  employee: EmployeeModel;
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const employeeIdFromRoute = Number(routeParams.get("employeeId"));
    this.getEmployee(employeeIdFromRoute);
  }

  getEmployee(id: number) {
    this.employeeService
      .getEmployeeById(id)
      .subscribe(employee => (this.employee = employee.data));
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id);
  }

  onDelete() {
    const routeParams = this.route.snapshot.paramMap;
    const employeeIdFromRoute = Number(routeParams.get("employeeId"));
    this.deleteEmployee(employeeIdFromRoute);
  }
}
