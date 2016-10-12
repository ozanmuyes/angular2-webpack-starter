import {Component, Input, OnInit} from "@angular/core";

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
export class MenuComponent implements OnInit {
  items: Item[] = [];

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.getMenuItems()
      .subscribe((data) => this.items = data);

    // this.menuService.getMenuItems().then((data: Item[]) => {
    //   for (let datum of data) {
    //     this.items.push(new Item(datum.id, datum.name));
    //   }
    // });
  }

  order(item: Item) {
    console.log(item.name + ' ordered');

    // TODO Make POST request to server
  }
}
