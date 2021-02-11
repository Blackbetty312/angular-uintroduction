import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-main",
  templateUrl: "./login-main.component.html",
  styleUrls: ["./login-main.component.css"]
})
export class LoginMainComponent implements OnInit {
  key: boolean;
  constructor(private router: Router) {}

  ngOnInit() {
    this.key =
      localStorage.getItem("authKey") ===
      "PQg3mM42raewuqlqiLV4JyyPhNPIrAiJaiLmgqOS";
    if (this.key) {
      this.router.navigate(["/accounts"]);
    }
  }
}
