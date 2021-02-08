import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];
  cartInfo = new Subject<number>();
  cartSum = new Subject<number>();

  constructor(private http: HttpClient) {}

  getCartInfo(): Observable<number> {
    return this.cartInfo.asObservable();
  }
  getCartSum(): Observable<number> {
    return this.cartSum.asObservable();
  }

  updateCartInfo(num: number, sum: number): void {
    this.cartInfo.next(num);
    this.cartSum.next(sum);
  }

  addToCart(product) {
    this.items.push(product);
  }

  removeFromCart(productId: number) {
    const index = this.items.indexOf(productId, 0);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getItemsFromCart() {
    return this.items;
  }

  getNOCart() {
    return this.items.length;
  }

  getPriceOfCart() {
    let sum = 0;
    this.items.forEach(item => {
      sum += item.price;
    });
    return sum;
  }

  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }
}
