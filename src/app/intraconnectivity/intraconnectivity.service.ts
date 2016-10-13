import {ReflectiveInjector} from "@angular/core";

import {Intraconnectable} from "../intraconnectivity";

import {LogModule} from "../log/log.module";
import {OrderModule} from "../order/order.module";
import {PaymentModule} from "../payment/payment.module";
import {LogService} from "../log/log.service";

export class IntraconnectivityService {
  private injector: ReflectiveInjector;

  constructor() {
    // TODO USE AppModule's `injector` IF POSSIBLE
    this.injector = ReflectiveInjector.resolveAndCreate([
      LogModule,
      LogService,
      OrderModule,
      PaymentModule,
      // Add other necessary classes here to `get` from this injector
    ]);
  }

  public getFeaturesToPush(activeFeatureName: string): Intraconnectable[] {
    switch (activeFeatureName) {
      case 'order': {
        return [
          this.injector.get(LogModule),
          this.injector.get(PaymentModule),
        ];
      }
    }
  }
}
