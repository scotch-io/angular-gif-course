import { Component, OnInit } from '@angular/core';
import { GifService } from '@app/core/services/gif.service';

@Component({
  selector: 'app-battle',
  template: `
    <h1 class="title has-text-centered">Battle!</h1>

    <div class="columns" *ngIf="battleGifs">

      <div class="column is-half" *ngFor="let gif of battleGifs">
        <div class="gif-container">
          <img [src]="gif.url">
          <div class="caption">{{ gif.caption }}</div>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .gif-container {
      position: relative;
    }

    .caption   {
      display: block;
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 30px;
      text-align: center;
      color: #FFF;
      font-size: 30px;
      text-transform: uppercase;
      line-height: 1;
      word-break: break-all;
      text-shadow: 1px 1px 3px #000;
    }

    img  {
      width: 100%;
      height: 300px;
      border-radius: 3px;
    }
  `]
})
export class BattleComponent implements OnInit {
  battleGifs: Array<any>;

  constructor(private gifService: GifService) {}

  ngOnInit() {
    this.gifService.getBattle()
      .subscribe(gifs => this.battleGifs = gifs);
  }

}
