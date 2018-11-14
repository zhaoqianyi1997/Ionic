import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BpagePage }from '../bpage/bpage'
import { Action } from 'rxjs/scheduler/Action';
import { HttpClient }from '@angular/common/http';
import { SearchPage } from '../search/search' 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {//类中只能声明属性和方法
 @ViewChild('ac') ac;
 icons:'camera';
 items = [];
 isActive = 0;
 isClick(i){
    this.isActive = i;
  }
  constructor(public navCtrl: NavController,public http:HttpClient) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  goSub(){
    this.navCtrl.push(BpagePage,{id:1});//
  }
    doInfinite(infiniteScroll) {
      this.http.get('/api/courses').subscribe(data=>{
        console.log(data);
        infiniteScroll.complete();
      })
     }
    doRefresh(refresher) {
      console.log('Begin async operation', refresher);
  
      setTimeout(() => {
        console.log('Async operation has ended');
        refresher.complete();
      }, 2000);
    }
    search(){
      this.navCtrl.push(SearchPage);
    }
  
  }

