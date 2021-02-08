import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
import { CartService } from "../cart.service";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));
    this.product = products.find(produkt => produkt.id === productIdFromRoute);
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert(product.name + " dodano do koszyka.");
    this.cartService.updateCartInfo(
      this.cartService.getNOCart(),
      this.cartService.getPriceOfCart()
    );
  }
}
