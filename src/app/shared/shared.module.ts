import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifComponent } from './components/gif/gif.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GifComponent],
  exports: [GifComponent]
})
export class SharedModule { }
