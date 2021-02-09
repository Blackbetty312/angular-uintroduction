import { Component, OnInit } from "@angular/core";
import { AccountModel } from "../../account-model";
import { AccountService } from "../account.service";

@Component({
  selector: "app-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.css"]
})
export class AccountListComponent implements OnInit {
  accounts: AccountModel[];
  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    this.accountService
      .getAccountList()
      .subscribe(accounts => (this.accounts = accounts));
  }
}
