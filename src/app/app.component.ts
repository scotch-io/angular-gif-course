import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    
    <section class="hero is-fullheight is-warning is-bold">
    <div class="hero-body">
    <div class="container">

      <flash-messages></flash-messages>
      <router-outlet></router-outlet>
   
    </div>
    </div>
    </section>

    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
