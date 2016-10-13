import {Intraconnectable} from "../intraconnectivity";
import {NgModule} from "@angular/core";
import {OrderService} from "./order.service";

@NgModule({
  providers: [
    OrderService,
  ]
})
export class OrderModule implements Intraconnectable {
  getInput(args: any): void {
    console.log(args);
  }
}
