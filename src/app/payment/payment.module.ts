import {Intraconnectable} from "../intraconnectivity";
import {NgModule} from "@angular/core";
import {PaymentService} from "./payment.service";

@NgModule({
  providers: [
    PaymentService,
  ]
})
export class PaymentModule implements Intraconnectable {
  public getInput(args: any): void {
    console.log("PaymentModule received args");
  }
}
