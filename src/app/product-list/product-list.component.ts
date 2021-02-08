import { Component } from "@angular/core";

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  produkty = products;

  share(name: String) {
    window.alert("Podzieliłeś się produktem " + name);
  }

  onNotify(name: String) {
    window.alert(
      "Udalo ci sie wlaczyc powiadomienie na produkt " +
        name +
        " dla ceny poniżej 650 zł"
    );
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
