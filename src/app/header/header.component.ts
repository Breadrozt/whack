import { Component } from '@angular/core';
import { MoleService } from '../mole.service';
@Component({
  selector: 'app-header',
  template: `
  timer
  {{__moleService.timer.timer}}
  <button (click)="__moleService.startGame()" [disabled]="__moleService.timer.timer==0 ||__moleService.timer.timer<60 " >Start Game</button>

  Points
  {{__moleService.points.points}}
  `,
  styles: [
  ]
})
export class HeaderComponent {
  
 constructor(
   public __moleService:MoleService

 ){}
}
