import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurvivorRoutingModule } from './survivor-routing.module';
import { EnchantressComponent } from './enchantress/enchantress.component';
import { PrisonerComponent } from './prisoner/prisoner.component';
import { AcrobatComponent } from './acrobat/acrobat.component';


@NgModule({
  declarations: [
    EnchantressComponent,
    PrisonerComponent,
    AcrobatComponent
  ],
  imports: [
    CommonModule,
    SurvivorRoutingModule
  ]
})
export class SurvivorModule { }
