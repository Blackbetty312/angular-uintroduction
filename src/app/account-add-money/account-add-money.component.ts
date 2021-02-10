import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountModel } from "../account-model";
import { AccountService } from "../account.service";

@Component({
  selector: "app-account-add-money",
  templateUrl: "./account-add-money.component.html",
  styleUrls: ["./account-add-money.component.css"]
})
export class AccountAddMoneyComponent implements OnInit {
  addMoneyForm;
  acc;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit() {
    this.addMoneyForm = this.formBuilder.group({
      ammount: 0
    });
  }

  onAddMoney() {
    if (this.addMoneyForm.value.ammount * 100 < 100) {
      window.alert("Za mała kwota doładowania");
      return;
    }
    const routeParams = this.route.snapshot.paramMap;
    const accountIdFromRoute = String(routeParams.get("accountId"));
    const model = this.accountService
      .getAccountById(accountIdFromRoute)
      .subscribe((account: AccountModel) => {
        console.log(account);
        const newModel: AccountModel = account;
        newModel.ammount += this.addMoneyForm.value.ammount * 100;
        console.log(newModel);
        this.accountService.updateAccountById(accountIdFromRoute, newModel);
        
      });
  }
}
