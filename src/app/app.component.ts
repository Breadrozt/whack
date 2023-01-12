import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <hr>
  <app-moles></app-moles>
  `,
  styles: ['']
})
export class AppComponent {
  title = 'whackAMole';
}
