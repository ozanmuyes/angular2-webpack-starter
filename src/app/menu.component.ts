import {Component, OnInit} from "@angular/core";

import {MenuItem} from "./menu-item";
import {MenuService} from "./menu.service";
import {IntraconnectivityService} from "./intraconnectivity/intraconnectivity.service";
import {Intraconnectable} from "./intraconnectivity";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [
    MenuService,
  ]
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(
    private ic: IntraconnectivityService,
    private menuService: MenuService
  ) {
  }

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe(
      data => this.items = data,
      error => console.error(error)
    );
  }

  order(item: MenuItem) {
    console.log(item.name + ' ordered');

    // TODO Make POST request to server

    this.ic.getFeaturesToPush('order').forEach((nextModule: Intraconnectable) => {
      nextModule.getInput(item);
    });
  }
}
