import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input("produktek") produkt;
  @Output() powiadomienie = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  notify(name: String) {
    window.alert(
      "Udalo ci sie wlaczyc powiadomienie na produkt " +
        name +
        " dla ceny poniżej 650 zł"
    ); // nieużywane, używamy onNotify w komponencie rodzica
  }
}
