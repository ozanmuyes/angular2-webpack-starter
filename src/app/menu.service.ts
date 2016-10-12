import {Http} from "@angular/http";

import {Item} from "./item";
import {Observable} from "rxjs";

export class MenuService {
  private url: string = 'http://localhost:3000/users';

  constructor(private http: Http) {
  }

  getMenuItems(): Observable<Item[]> {
    return this.http.get(this.url)
      .map((data) => data.json());
  }

  // getMenuItems(): Promise<Item[]> {
  //   return this.http
  //     .get(this.url)
  //     .toPromise()
  //     .then(res => res.json() as Item[])
  //     .catch(this.handleError);
  // }

  private handleError() {

  }
}
