import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { EmployeeAddModel, EmployeeModel } from "./employee-model";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  baseUrl: string = "https://dummy.restapiexample.com/api/v1/";
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(this.baseUrl + "employees");
  }

  getEmployeeById(id: number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(this.baseUrl + "employee/" + id);
  }

  addNewEmployee(model: EmployeeAddModel) {
    const headers = {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    };
    const body = JSON.stringify(model);
    return this.http
      .post(this.baseUrl + "create", body, { headers: headers })
      .subscribe(err => console.log(err));
  }

  deleteEmployee(id: number) {
    return this.http
      .delete(this.baseUrl + "delete/" + id)
      .subscribe(err => (window.alert(err.message), console.log(err)));
  }

  updateEmployee(id: number, model: EmployeeAddModel) {
    const headers = {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    };
    const body = JSON.stringify(model);
    return this.http
      .put(this.baseUrl + "update/" + id, body, { headers })
      .subscribe(err => window.alert(err.message));
  }
}
