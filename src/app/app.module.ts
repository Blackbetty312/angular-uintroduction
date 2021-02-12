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
import { ObservablePracticeComponent } from "./observable-practice/observable-practice.component";
import { AccountAddComponent } from "./account-add/account-add.component";
import { AccountAddMoneyComponent } from "./account-add-money/account-add-money.component";
import { AccountExpenseComponent } from "./account-expense/account-expense.component";
import { LoginMainComponent } from "./login-main/login-main.component";
import { AccountGooglePayComponent } from "./account-google-pay/account-google-pay.component";
import { FormsModule } from "@angular/forms";
import { GooglePayButtonModule } from "@google-pay/button-angular";
import { AuthorizationCallbackComponent } from "./authorization-callback/authorization-callback.component";
import { KeysPipePipe } from "./keys-pipe.pipe";
import { KeysPipe } from "./keys.pipe";
import { AuthorizationService } from './authorization.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    GooglePayButtonModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent }, // dodajemy routing dla opisu produktow
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent },
      { path: "accounts", component: AccountListComponent },
      { path: "account/get/:accountId", component: AccountDetailsComponent },
      { path: "account/add", component: AccountAddComponent },
      {
        path: "account/money/add/:accountId",
        component: AccountAddMoneyComponent
      },
      {
        path: "account/googlepay/add/:accountId",
        component: AccountGooglePayComponent
      },
      {
        path: "account/expenses/:accountId",
        component: AccountExpenseComponent
      },
      { path: "employees", component: EmployeeListComponent },
      { path: "employee/get/:employeeId", component: EmployeeDetailsComponent },
      { path: "employee/add", component: EmployeeAddComponent },
      { path: "employee/edit/:employeeId", component: EmployeeEditComponent },
      { path: "tags", component: TagListComponent },
      { path: "users", component: UserListComponent },
      { path: "user/:userId", component: UserDetailsComponent },
      { path: "observable", component: ObservablePracticeComponent },
      { path: "login", component: LoginMainComponent },
      { path: "callback", component: AuthorizationCallbackComponent }
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
    EmployeeEditComponent,
    ObservablePracticeComponent,
    AccountAddComponent,
    AccountAddMoneyComponent,
    AccountExpenseComponent,
    LoginMainComponent,
    AccountGooglePayComponent,
    AuthorizationCallbackComponent,
    KeysPipe
  ],
  bootstrap: [AppComponent],
  providers: [CartService, AccountService, EmployeeService, UserService, AuthorizationService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
