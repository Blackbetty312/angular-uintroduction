import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartComponent } from "./cart/cart.component";
import { CartService } from "./cart.service";
import { HttpClientModule } from "@angular/common/http";
import { ShippingComponent } from "./shipping/shipping.component";
import { AccountListComponent } from "./account-list/account-list.component";
import { AccountService } from "./account.service";
import { AccountDetailsComponent } from "./account-details/account-details.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeService } from "./employee.service";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { TagListComponent } from "./tag-list/tag-list.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserService } from "./user.service";
import { EmployeeAddComponent } from "./employee-add/employee-add.component";
import { EmployeeEditComponent } from "./employee-edit/employee-edit.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent }, // dodajemy routing dla opisu produktow
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent },
      { path: "accounts", component: AccountListComponent },
      { path: "account/:accountId", component: AccountDetailsComponent },
      { path: "employees", component: EmployeeListComponent },
      { path: "employee/get/:employeeId", component: EmployeeDetailsComponent },
      { path: "employee/add", component: EmployeeAddComponent },
      { path: "tags", component: TagListComponent },
      { path: "users", component: UserListComponent },
      { path: "user/:userId", component: UserDetailsComponent },
      { path: "employee/edit/:employeeId", component: EmployeeEditComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    AccountListComponent,
    AccountDetailsComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    TagListComponent,
    UserListComponent,
    UserDetailsComponent,
    EmployeeAddComponent,
    EmployeeEditComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartService, AccountService, EmployeeService, UserService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
