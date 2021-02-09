import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { AccountModel } from "../account-model";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccountList(): Observable<AccountModel[]> {
    return this.http.get<AccountModel[]>("assets/accounts.json");
  }
}
