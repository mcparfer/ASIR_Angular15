import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HunterRoutingModule } from './hunter-routing.module';
import { PhotographerComponent } from './photographer/photographer.component';
import { BloodyqueenComponent } from './bloodyqueen/bloodyqueen.component';
import { DreamwitchComponent } from './dreamwitch/dreamwitch.component';


@NgModule({
  declarations: [
    PhotographerComponent,
    BloodyqueenComponent,
    DreamwitchComponent
  ],
  imports: [
    CommonModule,
    HunterRoutingModule
  ]
})
export class HunterModule { }
