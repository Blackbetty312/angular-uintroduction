import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthorizationService } from "../authorization.service";
import jwt_decode from "jwt-decode";
import { UserGoogleModel } from "../user-google-model";
import { AccountService } from "../account.service";

@Component({
  selector: "app-authorization-callback",
  templateUrl: "./authorization-callback.component.html",
  styleUrls: ["./authorization-callback.component.css"]
})
export class AuthorizationCallbackComponent implements OnInit {
  queryParams;
  access_token = "";
  expires_in;
  id_token = "";
  flag = false;
  userInfo: UserGoogleModel;
  constructor(
    private route: ActivatedRoute,
    private authorizationService: AuthorizationService,
    private router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.queryParams = this.route.snapshot.queryParams;
    this.authorizationService
      .requestAccessToken(this.queryParams.state, this.queryParams.code)
      .subscribe(
        data => {
          this.access_token = data.access_token;
          this.expires_in = data.expires_in;
          this.id_token = data.id_token;
          this.flag = true;
          this.userInfo = UserGoogleModel.fromToken(jwt_decode(this.id_token));
          this.accountService.addUserViaGoogle(
            this.userInfo.email,
            this.access_token
          );
          localStorage.setItem("access_token", this.access_token);
          //this.router.navigate(["/accounts"]);
        },
        error => {
          console.log("oops", error);
        }
      );
  }
}
