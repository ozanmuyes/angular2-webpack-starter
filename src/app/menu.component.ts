import {Component} from "@angular/core";
import {Response} from "@angular/http";

import {Item} from "./item";
import {MenuService} from "./menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [
    MenuService,
  ]
})
export class MenuComponent {
  items: Item[] = [];

  constructor(private menuService: MenuService) {
    menuService.getMenuItems().then((data: Item[]) => {
      for (let datum of data) {
        this.items.push(new Item(datum.id, datum.name));
      }
    });
  }

  order(item : Item) {
    console.log(item.name + ' ordered');

    // TODO Make POST request to server
  }
}
