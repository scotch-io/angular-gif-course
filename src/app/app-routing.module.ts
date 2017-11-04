import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BattleComponent } from '@app/pages/battle/battle.component';
import { CreateComponent } from '@app/pages/create/create.component';
import { LeaderboardComponent } from '@app/pages/leaderboard/leaderboard.component';

const routes: Routes = [
  {
    path: '',
    component: BattleComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
