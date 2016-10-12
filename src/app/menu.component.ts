import {Component, OnInit} from "@angular/core";

import {MenuItem} from "./menu-item";
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
  items: MenuItem[] = [];

  constructor(private menuService: MenuService) {
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
  }
}
