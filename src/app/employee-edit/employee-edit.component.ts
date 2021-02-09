import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { EmployeeAddModel, EmployeeModel } from "../employee-model";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee-edit",
  templateUrl: "./employee-edit.component.html",
  styleUrls: ["./employee-edit.component.css"]
})
export class EmployeeEditComponent implements OnInit {
  employee: EmployeeModel;
  editUserForm;
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const employeeIdFromRoute = Number(routeParams.get("employeeId"));
    this.getEmployee(employeeIdFromRoute);
  }

  getEmployee(id: number) {
    this.employeeService.getEmployeeById(id).subscribe(
      employee => (
        (this.employee = employee.data),
        (this.editUserForm = this.formBuilder.group({
          name: this.employee.employee_name,
          salary: this.employee.employee_salary / 100,
          age: this.employee.employee_age
        }))
      )
    );
  }

  onUpdate() {
    const routeParams = this.route.snapshot.paramMap;
    const employeeIdFromRoute = Number(routeParams.get("employeeId"));
    const updatedEmployee: EmployeeAddModel = {
      name: this.editUserForm.value.name,
      salary: String(this.editUserForm.value.salary),
      age: String(this.editUserForm.value.age)
    };
    this.employeeService.updateEmployee(employeeIdFromRoute, updatedEmployee);
  }
}
