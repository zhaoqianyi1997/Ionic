import { Component } from '@angular/core';
import {  NavController, NavParams,ModalController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ApagePage }from '../apage/apage';
import { BpagePage }from '../bpage/bpage';
import { AddPage } from '../add/add';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {//路由配置

  tab1Root = HomePage;
  tab2Root = AboutPage;
  // tab3Root = ContactPage;
  tab4Root = ApagePage;
  tab5Root = BpagePage;

  constructor(public modalCtrl: ModalController,public navCtrl: NavController) {

  }
  // 实现点击加号跳出一个add页面（无下面的导航栏）modal窗口 相当于一个弹窗
  ionViewDidLoad(){
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      let profileModal = this.modalCtrl.create(AddPage);
      profileModal.present();
    },false)
  }
}
