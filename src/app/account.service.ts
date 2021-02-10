import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { AccountModel } from "../account-model";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  baseUrl =
    "https://angular-project-a6abb-default-rtdb.europe-west1.firebasedatabase.app/";
  constructor(private http: HttpClient) {}

  getAccountList() {
    return this.http.get(this.baseUrl + "salda.json");
  }

  addNewAccount(model: AccountModel) {
    const body = JSON.stringify(model);
    return this.http.post(this.baseUrl + "salda.json", body).subscribe(err => {
      console.log(err);
    });
  }

  deleteAccountById(id: String) {
    return this.http
      .delete(this.baseUrl + "salda/" + id + ".json")
      .subscribe(err => {
        console.log(err);
      });
  }

  getAccountById(id: String) {
    return this.http.get(this.baseUrl + "salda/" + id + ".json");
  }

  updateAccountById(id: String, model: AccountModel) {
    const body = JSON.stringify(model);
    return this.http
      .put(this.baseUrl + "salda/" + id + ".json", body)
      .subscribe(err => {
        console.log(err);
      });
  }
}
