import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AccountService } from "../account.service";
import { AuthorizationService } from "../authorization.service";

@Component({
  selector: "app-login-main",
  templateUrl: "./login-main.component.html",
  styleUrls: ["./login-main.component.css"]
})
export class LoginMainComponent implements OnInit {
  key: boolean;
  loginForm;
  user;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private authorizationService: AuthorizationService
  ) {}

  ngOnInit() {
    this.key =
      localStorage.getItem("authKey") ===
      "PQg3mM42raewuqlqiLV4JyyPhNPIrAiJaiLmgqOS";
    if (this.key) {
      this.router.navigate(["/accounts"]);
    }
    this.loginForm = this.formBuilder.group({
      email: "",
      password: ""
    });
  }

  onLogin() {
    this.accountService.getUsers().subscribe(user => {
      this.user = this.convertJson(user);
      const searchedUser = this.user.find(
        x =>
          x.login === this.loginForm.value.email &&
          x.password === this.loginForm.value.password
      );
      if (searchedUser) {
        localStorage.setItem(
          "authKey",
          "PQg3mM42raewuqlqiLV4JyyPhNPIrAiJaiLmgqOS"
        );
      }
      this.router.navigate(["/login"]);
      location.reload();
    });
  }
  convertJson(json) {
    return Object.keys(json).map(key => ({
      id: key,
      login: json[key].login,
      password: json[key].password
    }));
  }

  onLoginViaGoogle() {
    window.location.href = this.authorizationService.authorizeRequest();
  }
}
