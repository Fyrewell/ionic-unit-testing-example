import { NgModule } from '@angular/core';
import { Page1 } from './page1'
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [Page1],
  imports: [IonicPageModule.forChild(Page1)],
})
export class Page1Module { }
