import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WtfServiceMock {

  constructor(public http: Http) {
    console.log('Hello WtfServiceMock Provider');
  }

  getSomething() {
    return this.http.get('/').map(resp => { return { yellow : 'submarine', mock: true} });
  }
}
