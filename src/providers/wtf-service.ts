import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WtfService {

  constructor(public http: Http) {
    console.log('Hello WtfService Provider');
  }

  getSomething() {
    return this.http.get('/').map(resp => { return resp.json(); });
  }

}
