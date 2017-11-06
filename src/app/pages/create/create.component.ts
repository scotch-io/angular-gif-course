import { Component, OnInit } from '@angular/core';
import { GifService } from '@app/core/services/gif.service';

@Component({
  selector: 'app-create',
  template: `
    <h1 class="title has-text-centered">Create a Gif!</h1>

    <div class="box">
      <div class="gif-container" *ngIf="randomGif">
        <!-- image -->
        <img [src]="randomGif.url">

        <!-- caption -->
        <div class="caption">{{ caption }}</div>        
      </div>

      <!-- create a caption -->
      <div class="field">
        <input type="text" class="input" [(ngModel)]="caption">
      </div>

      <!-- create button -->
      <a class="button is-success" (click)="saveGif()">
        Create
      </a>
    </div>
  `,
  styles: [`
    .box     {
      max-width: 50%;
      margin: 0 auto;
    }
    
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
    
    .button {
      display: block;
      width: 100%;
    }

    img     {
      width: 100%;
      border-radius: 3px;
    }
  `]
})
export class CreateComponent implements OnInit {
  randomGif;
  caption = '';

  constructor(private gifService: GifService) {}

  ngOnInit() {
    this.getRandomGif();
  }

  getRandomGif() {
    this.gifService.getRandom()
      .subscribe(gif => this.randomGif = gif);
  }

  saveGif() {
    this.gifService.save(this.randomGif.id, this.randomGif.url, this.caption)
      .subscribe(data => {
        // reload the gif, get a new random gif
        this.getRandomGif();

        // clear the caption
        this.caption = '';

        // show a notification of success
      });
  }

}
