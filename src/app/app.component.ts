import {Component} from '@angular/core';

import '../../public/css/styles.css';
import {IntraconnectivityService} from "./intraconnectivity/intraconnectivity.service";
import {Intraconnectable} from "./intraconnectivity";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
