import {Intraconnectable} from "../intraconnectivity";
import {NgModule} from "@angular/core";
import {LogService} from "./log.service";

@NgModule({
  providers: [
    LogService,
  ]
})
export class LogModule implements Intraconnectable {
  constructor(private service: LogService){
  }

  public getInput(args: any): void {
    this.service.log(JSON.stringify(args));
  }
}
