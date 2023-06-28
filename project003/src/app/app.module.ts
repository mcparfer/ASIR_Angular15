import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HunterComponent } from './modules/hunter/hunter.component';
import { SurvivorComponent } from './modules/survivor/survivor.component';

@NgModule({
  declarations: [
    AppComponent,
    HunterComponent,
    SurvivorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
