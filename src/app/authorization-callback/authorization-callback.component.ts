import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthorizationService } from "../authorization.service";
import jwt_decode from "jwt-decode";
import { UserGoogleModel } from "../user-google-model";

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
    private authorizationService: AuthorizationService
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
          console.log(jwt_decode(this.id_token));
          this.userInfo = UserGoogleModel.fromToken(jwt_decode(this.id_token));
        },
        error => console.log("oops", error)
      );
  }
}
