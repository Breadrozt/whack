import { Component, OnInit } from '@angular/core';
import { MoleService } from '../mole.service';

@Component({
  selector: 'app-moles',
  template: `
    <div class="game-board">
        <div class="cell" *ngFor="let cell of __moleService.testGrid; let i = index">
          <ng-template [ngIf]='__moleService.testGrid[i]'>
            <button class=""
            *ngIf="this.__moleService.gameRunning.gameRunning" 
            (click)="__moleService.pointGain(i)"
            ><img class="image" src="https://a-z-animals.com/media/animals/images/original/mole2.jpg" alt=""></button>
          </ng-template>
        </div>
    </div>
  `,
styles: [`
  .red{
  background-color:red
}
  .game-board {
  display:flex;
  flex-wrap:wrap;
  width: 700px
}
  .cell {
  width:70px;
  height:50px;
  padding:10px;
  margin:30px;
  background-color: green
}
  .image {
    width:100%
  }
`]
})
export class MolesComponent{
  grid:string [][];
  test123:boolean=true
  numberofMolea = this.__moleService.numberofMoles
  Images = this.__moleService.image
  gameMoles = this.__moleService.gameMoles
    constructor(
    public __moleService:MoleService,
    )
  {}
 }