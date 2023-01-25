import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  <hr>
  `,
  styles: ['']
})
export class AppComponent {
  title = 'whackAMole';
}
