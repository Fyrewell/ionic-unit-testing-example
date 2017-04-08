import { Component } from '@angular/core';

import { NavController, IonicPage } from 'ionic-angular';

import { ENV } from '@app/config';

import { WtfService } from '../../providers/wtf-service';

@IonicPage({
  name: 'page1'
})
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  public mock: string;

  constructor(public navCtrl: NavController, public wtfService: WtfService) {
    console.log(ENV);
    wtfService.getSomething()
      .subscribe(
        (res) => { console.log(res); this.mock = JSON.stringify(res); },
        (err) => {}
      );
  }

}
