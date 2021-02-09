import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AccountModel } from "../../account-model";
import { AccountService } from "../account.service";

@Component({
  selector: "app-account-details",
  templateUrl: "./account-details.component.html",
  styleUrls: ["./account-details.component.css"]
})
export class AccountDetailsComponent implements OnInit {
  accounts: AccountModel[];
  account: AccountModel;
  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {}
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const accountIdFromRoute = Number(routeParams.get("accountId"));
    this.getAccounts(accountIdFromRoute);
  }
  getAccounts(id: number) {
    this.accountService
      .getAccountList()
      .subscribe(
        accounts => (
          (this.accounts = accounts),
          (this.account = accounts.find(x => x.id === id))
        )
      );
  }
}
