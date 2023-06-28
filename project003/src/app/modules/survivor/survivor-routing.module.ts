import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcrobatComponent } from './acrobat/acrobat.component';
import { EnchantressComponent } from './enchantress/enchantress.component';
import { PrisonerComponent } from './prisoner/prisoner.component';

const routes: Routes = [
  {
    path: 'acrobat',
    component: AcrobatComponent
  },
  {
    path: 'enchantress',
    component: EnchantressComponent
  },
  {
    path: 'prisoner',
    component: PrisonerComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HunterRoutingModule { }

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurvivorRoutingModule { }
