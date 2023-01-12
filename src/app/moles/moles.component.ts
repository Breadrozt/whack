import { Component, OnInit } from '@angular/core';
import { MoleService } from '../mole.service';

@Component({
  selector: 'app-moles',
  template: `
    <div class="game-board">
      <div class="row" *ngFor=" let row of this.__moleService.grid; let i = index">
        <div class="cell" *ngFor=" let Images of row; let j = index">
          <img *ngIf="Images" [src]="Images" (click)="__moleService.pointGain()">Mole
        </div>
      </div>
    </div>
  `,
  styles: [`
.row {
  display: flex;
  flex-wrap: wrap;
}
.cell {
  display: flex;
  width:100px;
  padding:10px;
  margin:20px;
}
`]
})
export class MolesComponent{
 grid:string [][];
 Images = this.__moleService.image

  constructor(
   public __moleService:MoleService,
  )
  { this.grid= this.__moleService.grid}
  // ngOnInit(): void {
  //   this.__moleService.numberOfMoles = 25
  //    for(let i=0; i<this.__moleService.numberOfMoles; i++){
  //      this.__moleService.gameMoles.push(i)
  //    }
//*ngFor="let mole of this.__moleService.gameMoles"
 }
    
