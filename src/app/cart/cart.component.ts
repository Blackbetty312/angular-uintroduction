import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items = [];
  shippingCosts = this.cartService.getShippingPrices();
  sum = 0;

  payForm = this.formBuilder.group({
    login: "",
    ammount: ""
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.items = this.cartService.getItemsFromCart();
  }

  clearCart() {
    this.cartService.clearCart();
    window.alert("Koszyk wyczyszczono");
    this.ngOnInit();
    this.cartService.updateCartInfo(0, 0);
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn("Zamowienie zostalo zlozone ", this.payForm.value);
    this.payForm.reset();
  }
}
