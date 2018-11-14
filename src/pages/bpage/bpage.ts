import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetPage } from '../set/set' 
/**
 * Generated class for the BpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bpage',
  templateUrl: 'bpage.html',
})
export class BpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 goSub(){
   this.navCtrl.push(SetPage);
 }

}
