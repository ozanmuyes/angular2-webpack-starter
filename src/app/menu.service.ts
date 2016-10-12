import {Http, Response} from "@angular/http";

import {MenuItem} from "./menu-item";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class MenuService {
  private url: string = 'http://localhost:3000/menu';

  constructor(private http: Http) {
  }

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get(this.url)
      .map(data => data.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
