import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BattleComponent } from './battle/battle.component';
import { CreateComponent } from './create/create.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [BattleComponent, CreateComponent, LeaderboardComponent]
})
export class PagesModule { }
