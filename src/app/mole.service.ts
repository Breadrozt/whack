import { Injectable,OnInit, ElementRef } from '@angular/core';
import { gameMode } from './moledata';
import { NgClass } from '@angular/common';
import { timeInterval } from 'rxjs';

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
  
  constructor(
    ) {}
    testGrid: boolean[]= [  // the grid layout for our moles and sets them all to false/ not shown
      false,false,false,false,false,
      false,false,false,false,false,
      false,false,false,false,false,
      false,false,false,false,false,
      false,false,false,false,false,
    ]
    testGrid2: NodeJS.Timer[]= [  // the grid layout for our moles and sets them all to false/ not shown
    ,,,,,
    ,,,,,
    ,,,,,
    ,,,,,
    ,,,,,
  ]

    

startGame():void {          // Method for starting the game and the clock system.
  this.gameRunning.gameRunning = true
  setInterval( () => this.countdown(60), 1000)
  console.log(this.gameRunning.gameRunning)  
}

 countdown(numberRecieved:number) { // this needs fixing. to start a new game after countdown is finished and show points.
   if(this.timer.timer < 0 ){
     confirm('game finished, you scored {{this.points.points}}')
   }else {
     this.timer.timer--;
     this.MoleRandomize()

   }
 }

 MoleRandomize(){ // used for randomizing a spot for the mole to show up in 
  if (this.numberofMoles.numberOfMoles < 4){
    let randomizer =  Math.floor(Math.random() * 26)
    if(this.testGrid[randomizer]==false){
      this.testGrid[randomizer]= true
      this.numberofMoles.numberOfMoles ++
      this.testGrid2[randomizer] = setInterval( ()=> this.moleUpTime(randomizer), 4000) // starts the inertvalls //issues here*******
    }
  }
}
moleUpTime(randomizer:number){ // the method for putting the moles back down if they havent been clicked. //issues here****
  if(this.testGrid[randomizer]){
    this.testGrid[randomizer]=false
    this.numberofMoles.numberOfMoles--
    clearInterval(this.testGrid2[randomizer])
  }
}

 pointGain(value:any){ // method for clicking a mole and gaining points, decreasing mole count so more can spawn. 
   if(this.gameRunning){
     this.points.points++
     this.numberofMoles.numberOfMoles--
     console.log(this.numberofMoles.numberOfMoles)
     this.testGrid[value]= !this.testGrid[value]
     console.log(value)
   }
 }
}
