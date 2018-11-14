import { Component } from '@angular/core';
import { App,IonicPage, NavController, NavParams} from 'ionic-angular';
// import { LoginPage} from '../login/login';
/**
 * Generated class for the SetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {

  constructor(public app:App,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPage');
  }
// close(){
//   // this.app.getRootNavs()[0].setRoot(LoginPage);
// }
}
