import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HunterComponent } from './modules/hunter/hunter.component';
import { SurvivorComponent } from './modules/survivor/survivor.component';

const routes: Routes = [
  {
    path: 'hunter',
    component: HunterComponent,
    loadChildren: () => import('./modules/hunter/hunter.module').then(m => m.HunterModule)
  },
  {
    path: 'survivor',
    component: SurvivorComponent,
    loadChildren: () => import('./modules/survivor/survivor.module').then(m => m.SurvivorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
