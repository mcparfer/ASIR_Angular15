import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodyqueenComponent } from './bloodyqueen/bloodyqueen.component';
import { DreamwitchComponent } from './dreamwitch/dreamwitch.component';
import { PhotographerComponent } from './photographer/photographer.component';

const routes: Routes = [
  {
    path: 'photographer',
    component: PhotographerComponent
  },
  {
    path: 'bloodyqueen',
    component: BloodyqueenComponent
  },
  {
    path: 'dreamwitch',
    component: DreamwitchComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HunterRoutingModule { }
