import { Component, OnInit } from '@angular/core';
import { GifService } from '@app/core/services/gif.service';
import { Gif } from '@app/models/gif.model';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-battle',
  template: `
    <h1 class="title has-text-centered">Battle!</h1>

    <div class="columns" *ngIf="battleGifs">

      <div class="column is-half" *ngFor="let gif of battleGifs">
        <app-gif [url]="gif.url" [caption]="gif.caption"></app-gif>

        <a 
          class="button is-info" 
          (click)="voteOnGif(gif.id)">
            Vote!
        </a>
      </div>

    </div>
  `,
  styles: [`
    ::ng-deep img  {
      width: 100%;
      height: 300px;
      border-radius: 3px;
    }

    .button {
      display: block;
      width: 100%;
    }
  `]
})
export class BattleComponent implements OnInit {
  battleGifs: Gif[];

  constructor(
    private gifService: GifService,
    private flashService: FlashMessagesService
  ) {}

  ngOnInit() {
    this.getNewBattle();
  }

  getNewBattle() {
    this.gifService.getBattle()
      .subscribe(gifs => this.battleGifs = gifs);
  }

  voteOnGif(id) {
    this.gifService.vote(id)
      .subscribe(data => {
        // load a new battle
        this.getNewBattle();
      
        // show notification of success
        this.flashService.show('Voted on gif!', {
          cssClass: 'notification is-success',
          timeout: 5000
        });
      });
  }

}
