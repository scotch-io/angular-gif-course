import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleComponent } from './battle/battle.component';
import { CreateComponent } from './create/create.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BattleComponent, CreateComponent, LeaderboardComponent]
})
export class PagesModule { }
