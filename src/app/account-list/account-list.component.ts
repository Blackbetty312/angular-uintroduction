import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AccountModel } from "../../account-model";
import { AccountModel } from "../account-model";
import { AccountService } from "../account.service";

@Component({
  selector: "app-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.css"]
})
export class AccountListComponent implements OnInit {
  accounts: AccountModel;
  key: boolean;
  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.getAccounts();
    // this.key =
    //   localStorage.getItem("authKey") ===
    //   "PQg3mM42raewuqlqiLV4JyyPhNPIrAiJaiLmgqOS";
    this.key = true;
  }

  getAccounts() {
    this.accountService.getAccountList().subscribe(accounts => {
      this.accounts = this.convertJson(accounts);
    });
  }

  convertJson(json) {
    return Object.keys(json).map(key => ({
      id: key,
      login: json[key].login,
      ammount: json[key].ammount
    }));
  }
}
