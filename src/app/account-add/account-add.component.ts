import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AccountModel } from "../account-model";
import { AccountService } from "../account.service";

@Component({
  selector: "app-account-add",
  templateUrl: "./account-add.component.html",
  styleUrls: ["./account-add.component.css"]
})
export class AccountAddComponent implements OnInit {
  addAccountForm = this.formBuilder.group({
    login: "",
    ammount: 0
  });
  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(x);
  }

  addAccount() {
    const model: AccountModel = {
      login: String(this.addAccountForm.value.login),
      ammount: Number(this.addAccountForm.value.ammount)
    };
    this.accountService.addNewAccount(model);
    window.alert(
      "Konto " + this.addAccountForm.value.login + " zostalo utworzone"
    );
    this.router.navigate(["/accounts"]);
  }
}
