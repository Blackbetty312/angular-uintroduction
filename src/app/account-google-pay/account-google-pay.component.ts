import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ReadyToPayChangeResponse } from "@google-pay/button-angular";
import { AccountModel } from "../account-model";
import { AccountService } from "../account.service";

@Component({
  selector: "app-account-google-pay",
  templateUrl: "./account-google-pay.component.html",
  styleUrls: ["./account-google-pay.component.css"]
})
export class AccountGooglePayComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit() {}

  amount = "10.00";
  buttonType = "buy";
  buttonColor = "black";
  buttonSizeMode = "fill";
  existingPaymentMethodRequired = false;

  paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Szwajcarska firma"
    }
  };

  onLoadPaymentData = (
    event: CustomEvent<google.payments.api.PaymentData>
  ): void => {
    console.log("load payment data", event.detail);
    this.addMoney();
  };

  onError = (event: ErrorEvent): void => {
    console.error("error", event.error);
  };

  // onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = paymentData => {
  //   console.log("payment authorized", paymentData);

  //   return {
  //     transactionState: "SUCCESS"
  //   };
  // };

  onReadyToPayChange = (event: CustomEvent<ReadyToPayChangeResponse>): void => {
    console.log("ready to pay change", event.detail);
  };

  addMoney() {
    const routeParams = this.route.snapshot.paramMap;
    const accountIdFromRoute = String(routeParams.get("accountId"));
    const model = this.accountService
      .getAccountById(accountIdFromRoute)
      .subscribe((account: AccountModel) => {
        const newModel: AccountModel = account;
        newModel.ammount += Number(this.amount) * 100;
        this.accountService.updateAccountById(accountIdFromRoute, newModel);
        window.alert("Doładowano konto kwotą " + this.amount);
        this.router.navigate(["/account/get", accountIdFromRoute]);
      });
  }

  // makeString(len: number): string {
  //   let outString: string = "";
  //   let inOptions: string =
  //     "abcdefghijklmnopqrstuvwxyz0123456789QWERTYUIOPASDFGHJKLZXCVBNM";

  //   for (let i = 0; i < len; i++) {
  //     outString += inOptions.charAt(
  //       Math.floor(Math.random() * inOptions.length)
  //     );
  //   }
  //   return outString;
  // }

  // payWithDatatrans() {
  //   console.log(this.accountService.initializeTransaction().subscribe());
  // }
}
