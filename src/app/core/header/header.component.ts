import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-info">
    <div class="container">

      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">🔥 Gif Battles</a>
      </div>

      <!-- menu -->
      <div class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item">⚡ Battle</a>
        <a class="navbar-item">🌳 Create</a>
        <a class="navbar-item">⭐ Leaderboard</a>
      </div>
      </div>

    </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
