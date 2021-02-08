import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CartService } from "../cart.service";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent implements OnInit {
  count = 0;
  sum = 0;
  subscription: Subscription;
  secondSubscription: Subscription;
  constructor(private cartService: CartService) {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.secondSubscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.cartService
      .getCartInfo()
      .subscribe(num => (this.count = num));
    this.secondSubscription = this.cartService
      .getCartSum()
      .subscribe(sum => (this.sum = sum));
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
