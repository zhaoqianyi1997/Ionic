import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BpagePage } from './bpage';

@NgModule({
  declarations: [
    BpagePage,
  ],
  imports: [
    IonicPageModule.forChild(BpagePage),
  ],
})
export class BpagePageModule {}
