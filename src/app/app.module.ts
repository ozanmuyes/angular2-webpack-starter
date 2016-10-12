import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
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
}
