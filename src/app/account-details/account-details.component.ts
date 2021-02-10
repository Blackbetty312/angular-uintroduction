import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountModel } from "../../account-model";
import { AccountService } from "../account.service";

@Component({
  selector: "app-account-details",
  templateUrl: "./account-details.component.html",
  styleUrls: ["./account-details.component.css"]
})
export class AccountDetailsComponent implements OnInit {
  account: AccountModel;
  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private router: Router
  ) {}
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const accountIdFromRoute = String(routeParams.get("accountId"));
    this.getAccountById(accountIdFromRoute);
  }
  getAccountById(id: String) {
    this.accountService.getAccountList().subscribe(accounts => {
      this.account = this.convertJson(accounts).find(x => x.id === id);
    });
  }
  convertJson(json) {
    return Object.keys(json).map(key => ({
      id: key,
      login: json[key].login,
      ammount: json[key].ammount
    }));
  }

  onDelete() {
    const routeParams = this.route.snapshot.paramMap;
    const accountIdFromRoute = String(routeParams.get("accountId"));
    this.deleteAccount(accountIdFromRoute);
    window.alert("Konto usunięto");
    this.router.navigate(["/accounts"]);
  }

  deleteAccount(id: String) {
    this.accountService.deleteAccountById(id);
  }
}
