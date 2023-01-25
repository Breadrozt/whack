import { Component} from '@angular/core';
import { MoleService } from '../mole.service';

@Component({
  selector: 'app-moles',
  template: `
  <body>
    <div class="game-board">
        <div class="cell" *ngFor="let cell of __moleService.moleGrid; let i = index">
          <ng-template [ngIf]='__moleService.moleGrid[i]'>
            <button class=""
            *ngIf="this.__moleService.gameRunning.gameRunning" 
            (click)="__moleService.pointGain(i)"
            ><img class="image" src="../../assets/3627329.png" alt=""></button>
          </ng-template>
        </div>
    </div>
    <hr>
    <app-user></app-user>
  </body>
  `,
styles: [`
  body{
    background-color: #3D3C3A;
    color: white;
  }
  .game-board {
  display:flex;
  flex-wrap:wrap;
  width:100%;

}
  .cell {
  width:150px;
  height:120px;
  margin:5px;
  background-image: url("../../assets/backgroundimage4.0.jpg");

}
  .image {
    width:100%
  }
`]
})
export class MolesComponent{
    constructor(
    public __moleService:MoleService,
    )
  {}
 }