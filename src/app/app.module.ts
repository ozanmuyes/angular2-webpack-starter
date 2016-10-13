import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu.component';

import {IntraconnectivityModule} from './intraconnectivity/intraconnectivity.module';
import {LogModule} from './log/log.module';
import {OrderModule} from './order/order.module';
import {PaymentModule} from './payment/payment.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    IntraconnectivityModule,
    LogModule,
    OrderModule,
    PaymentModule,
  ],
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  // providers: [
  //   MenuService,
  // ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor() {
    // let om = new OrderModule();
    // om.getInput({
    //   "foo": "bar",
    //   "baz": "qux",
    // });
  // }
}
