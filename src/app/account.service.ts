import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { AccountModel } from "../account-model";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  baseUrl =
    "https://angular-project-a6abb-default-rtdb.europe-west1.firebasedatabase.app/";
  //params = { auth: "PQg3mM42raewuqlqiLV4JyyPhNPIrAiJaiLmgqOS" };
  params;
  dataTransApi = "https://api.sandbox.datatrans.com/v1/";
  constructor(private http: HttpClient) {
    //this.params = { auth: localStorage.getItem("authKey") };
    this.params = { auth: "PQg3mM42raewuqlqiLV4JyyPhNPIrAiJaiLmgqOS" };
  }

  getAccountList() {
    return this.http.get(this.baseUrl + "salda.json", { params: this.params });
  }

  addNewAccount(model: AccountModel) {
    const body = JSON.stringify(model);
    return this.http
      .post(this.baseUrl + "salda.json", body, { params: this.params })
      .subscribe(err => {
        console.log(err);
      });
  }

  deleteAccountById(id: String) {
    return this.http
      .delete(this.baseUrl + "salda/" + id + ".json", { params: this.params })
      .subscribe(err => {
        console.log(err);
      });
  }

  getAccountById(id: String) {
    return this.http.get(this.baseUrl + "salda/" + id + ".json", {
      params: this.params
    });
  }

  updateAccountById(id: String, model: AccountModel) {
    const body = JSON.stringify(model);
    return this.http
      .put(this.baseUrl + "salda/" + id + ".json", body, {
        params: this.params
      })
      .subscribe(err => {
        console.log(err);
      });
  }

  getUsers() {
    return this.http.get(this.baseUrl + "user.json");
  }

  initializeTransaction() {
    const b64 = btoa("1100028526:qxh1XldDGrr4IrNA");
    const headers = {
      "content-type": "application/json",
      "access-control-allow-headers": "*",
      Authorization: "Basic MTEwMDAyODUyNjpxeGgxWGxkREdycjRJck5B"
    };
  }

  addUserViaGoogle(email: string, accessToken: string) {
    const model = new Object();
    model.email = email;
    model.access_token = accessToken;
    const body = JSON.stringify(model);
    console.log(body);
    return this.http.post(this.baseUrl + "user.json", body).subscribe();
  }
}
