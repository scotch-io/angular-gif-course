import { Component, OnInit } from '@angular/core';
import { GifService } from '@app/core/services/gif.service';
import { Gif } from '@app/models/gif.model';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-create',
  template: `
    <h1 class="title has-text-centered">Create a Gif!</h1>

    <div class="box">
      <app-gif
        *ngIf="randomGif"
        [url]="randomGif.url"
        [caption]="caption">
      </app-gif>

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
    
    .button {
      display: block;
      width: 100%;
    }

    ::ng-deep img     {
      width: 100%;
      border-radius: 3px;
    }
  `]
})
export class CreateComponent implements OnInit {
  randomGif: Gif;
  caption = '';

  constructor(
    private gifService: GifService,
    private flashService: FlashMessagesService
  ) {}

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
        this.flashService.show('Created a new gif!', {
          cssClass: 'notification is-success',
          timeout: 5000
        });
      });
  }

}
