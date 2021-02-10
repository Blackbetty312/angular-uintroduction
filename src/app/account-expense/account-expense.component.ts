import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountModel } from "../account-model";
import { AccountService } from "../account.service";

@Component({
  selector: "app-account-expense",
  templateUrl: "./account-expense.component.html",
  styleUrls: ["./account-expense.component.css"]
})
export class AccountExpenseComponent implements OnInit {
  waterCost = Number(Math.random() * 750 + 1);
  electricityCost = Number(Math.random() * 750 + 1);
  expenses = { water: this.waterCost, electricity: this.electricityCost };
  accountAmmount;
  afterPay;
  sumExpenses: number = Number(
    (Number(this.waterCost) + Number(this.electricityCost)).toFixed(2)
  );
  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const accountIdFromRoute = String(routeParams.get("accountId"));
    this.accountService
      .getAccountById(accountIdFromRoute)
      .subscribe((account: AccountModel) => {
        this.accountAmmount = account.ammount;
        this.afterPay = (this.accountAmmount - this.sumExpenses).toFixed(2);
      });
  }

  payExpenses() {
    const routeParams = this.route.snapshot.paramMap;
    const accountIdFromRoute = String(routeParams.get("accountId"));
    this.accountService
      .getAccountById(accountIdFromRoute)
      .subscribe((account: AccountModel) => {
        this.accountAmmount = account.ammount;
        const newModel = account;
        newModel.ammount -= this.sumExpenses;
        this.accountService.updateAccountById(accountIdFromRoute, newModel);
        window.alert("Rachunki zostały opłacone");
        this.router.navigate(["/accounts"], { skipLocationChange: true });
      });
  }
}
