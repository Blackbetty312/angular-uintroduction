import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserModel } from "../user-model";
import { UserService } from "../user.service";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent implements OnInit {
  user: UserModel;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get("userId"));
    console.log(productIdFromRoute);
    this.getUser(productIdFromRoute);
  }
  getUser(id: String) {
    this.userService.getUserById(id).subscribe(users => (this.user = users));
  }
}
