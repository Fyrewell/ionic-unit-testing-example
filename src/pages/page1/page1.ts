import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ENV } from '@app/config';

import { WtfService } from '../../providers/wtf-service';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, public wtfService: WtfService) {
    console.log(ENV);
    wtfService.getSomething()
      .subscribe(
        (res) => { console.log(res); },
        (err) => {}
      );
  }

}
