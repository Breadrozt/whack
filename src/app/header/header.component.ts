import { Component } from '@angular/core';
import { MoleService } from '../mole.service';
@Component({
  selector: 'app-header',
  template: `
  timer
  {{__moleService.timer}}

  <button (click)="__moleService.startGame()" [disabled]="__moleService.timer==0 ||__moleService.timer<5 " >Start Game</button>
  <button (click)="__moleService.setTime()">5 seconds</button>

  Points
  {{__moleService.points}}
  `,
  styles: [
  ]
})
export class HeaderComponent {
  
 constructor(
   public __moleService:MoleService

 ){}
}
