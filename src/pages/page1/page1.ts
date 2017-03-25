import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ENV } from '@app/config';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    console.log(ENV);
  }

}
