import { Component } from '@angular/core';
import { MoleService } from '../mole.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  template: `
  <body>
    <div>
      <span>Timer:</span>
      {{__moleService.timer.timer}}
    </div>
    <div>
      <Span>Points:</Span>
      {{__moleService.points.points}}
    </div>
    
    <div>
      <span> Fastest Mole caught:</span>
      {{__moleService.fastestTime.fastestTime}}
    </div>
    
    <br>
    <div>
      <button (click)="__moleService.startGame()" [disabled]="__moleService.gameRunning.gameRunning " class="btn btn-primary" >Start Game</button>
      <button type="button" class="btn btn-primary" (click)="toHighscores()">Highscores</button>
      <button type="button" class="btn btn-primary" (click)="toMoles()"> To Mole Game</button>
    </div>
  </body>
  `,
  styles: [`
  body{
    background-color: #3A3B3C;
  }
  .btn {
    margin: 15px;
  }
  div {
    color:white;
    font-size: 20px;
    display:inline;
    margin: 10px;
  }

  `]
})
export class HeaderComponent {

  
  
 constructor(
   public __moleService:MoleService,
   private __router: Router
   ){}

   toHighscores(){
    this.__router.navigate(['highscores']) // navigate to Highscores
   }
   toMoles(){
    this.__router.navigate(['']) // navigate to Mole games.
   }
}
