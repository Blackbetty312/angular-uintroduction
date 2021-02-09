import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { EmployeeAddModel } from "../employee-model";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee-add",
  templateUrl: "./employee-add.component.html",
  styleUrls: ["./employee-add.component.css"]
})
export class EmployeeAddComponent implements OnInit {
  addUserForm = this.formBuilder.group({
    name: "",
    salary: "",
    age: ""
  });

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  addUser(): void {
    const employee: EmployeeAddModel = {
      name: this.addUserForm.value.name,
      salary: String(this.addUserForm.value.salary),
      age: String(this.addUserForm.value.age)
    };
    console.warn("Zamowienie zostalo zlozone ", this.addUserForm.value.name);
    this.employeeService.addNewEmployee(employee);
  }
}
