import {Http} from "@angular/http";
import {Inject} from "@angular/core";

import {Item} from "./item";

export class MenuService {
  private url: string = 'http://localhost:3000/users';

  constructor(@Inject(Http) private http: Http) {
  }

  getMenuItems(): Promise<Item[]> {
    return this.http
      .get(this.url)
      .toPromise()
      .then(res => res.json() as Item[])
      .catch(this.handleError);
  }

  private handleError() {

  }
}
