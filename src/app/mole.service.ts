import { Injectable,OnInit, ElementRef } from '@angular/core';
import { gameMode } from './moledata';

@Injectable({
  providedIn: 'root'
})
export class MoleService {

  gameRunning:gameMode= {gameRunning:false};  // Gives Values to gameMode for usage all around the app.
  timer:gameMode= {timer: 60}
  points:gameMode={points:0};
  moles:gameMode={moles:false};
  gameMoles:gameMode={gameMoles:[]=[]}
  numberofMoles:gameMode={numberOfMoles: -1}
  image:gameMode={image:'JS2/WhackAMole/whackAMole/images/images.jpgC:/Users/Viktor/iCloudDrive/Desktop/Javascript/JS2/WhackAMole/whackAMole/node_modulesC:/Users/Viktor/iCloudDrive/Desktop/Javascript/JS2/WhackAMole/whackAMole/src/app/mole.service.ts'}
  gameDone:gameMode ={gameDone:false}
  fastestTime:gameMode={fastestTime:null}
  
  constructor(
    ) {}
    moleGrid: boolean[]= [  // the grid layout for our moles and sets them all to false/ not shown
      false,false,false,false,false,
      false,false,false,false,false,
      false,false,false,false,false,
      false,false,false,false,false,
      false,false,false,false,false,
    ]
    moleTimerGrid: NodeJS.Timer[]= [  // the grid layout for our moles and sets them all to false/ not shown
    ,,,,,
    ,,,,,
    ,,,,,
    ,,,,,
    ,,,,,
  ]
    timerGrid:number[] =[ // grid for pushing the speed of a click into.
    ,,,,,
    ,,,,,
    ,,,,,
    ,,,,,
    ,,,,,
    ]
    Clicktimer: number; // property for checking when something was clicked.


    

 startGame():void {          // Method for starting the game and the clock system.
  this.gameRunning.gameRunning = true
  this.timer.timer=60;
  this.points.points=0;
  this.fastestTime.fastestTime=9999;
  this.countdown() 
}

 countdown() { // this needs fixing. to start a new game after countdown is finished and show points.
  let id = setInterval ( ()=> {
    if(this.timer.timer < 1 ){
      this.gameDone.gameDone=!this.gameDone.gameDone
      this.gameRunning.gameRunning = !this.gameRunning.gameRunning
      clearInterval(id)
    }else {
      this.timer.timer--;
      this.MoleRandomize()
     }
    },1000)
 }

 MoleRandomize(){ // used for randomizing a spot for the mole to show up in 
  if (this.numberofMoles.numberOfMoles < 4){
    let randomizer =  Math.floor(Math.random() * 26)
    if(this.moleGrid[randomizer]==false){
      this.moleGrid[randomizer]= true
      this.numberofMoles.numberOfMoles ++
      this.moleTimerGrid[randomizer] = setInterval( ()=> this.moleUpTime(randomizer), 4000)
      this.timerGrid[randomizer] = Date.now()
    }
  }
}
moleUpTime(randomizer:number){ // the method for putting the moles back down if they havent been clicked. //issues here****
  if(this.moleGrid[randomizer]){
    this.moleGrid[randomizer]=false
    this.numberofMoles.numberOfMoles--
    clearInterval(this.moleTimerGrid[randomizer])
  }
}

 pointGain(value:any){ // method for clicking a mole and gaining points, decreasing mole count so more can spawn. 
   if(this.gameRunning){
     this.points.points++
     this.numberofMoles.numberOfMoles--
     clearInterval(this.moleTimerGrid[value])
     this.moleGrid[value]= !this.moleGrid[value] 
     this.Clicktimer = Date.now() - this.timerGrid[value] // making my timers check timer grid and checking speed with the fastest time.
     if(this.Clicktimer < this.fastestTime.fastestTime){ 
      this.fastestTime.fastestTime = this.Clicktimer
     }    
   }
 }
}
