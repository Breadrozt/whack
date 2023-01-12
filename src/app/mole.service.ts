import { Injectable,OnInit } from '@angular/core';
import { gameMode } from './moledata';

@Injectable({
  providedIn: 'root'
})
export class MoleService implements OnInit {
  timer:number=60
  points:number=0
  moles:boolean=false
  gameMoles:number [] = []
  numberOfMoles:number = 0
  image = ['JS2/WhackAMole/whackAMole/images/images.jpgC:/Users/Viktor/iCloudDrive/Desktop/Javascript/JS2/WhackAMole/whackAMole/node_modulesC:/Users/Viktor/iCloudDrive/Desktop/Javascript/JS2/WhackAMole/whackAMole/src/app/mole.service.ts']

  constructor( ) {}

grid: string[][] = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ];

startGame():void {
  setInterval( () => this.countdown(this.timer), 1000)
}
countdown(numberRecieved:number) {
  if(this.timer===0){
    alert("game finished, reset?")
  }else {
    this.timer--;
  }
}
setTime(){
  this.timer=5
}
pointGain(){
  this.points++

}
ngOnInit() {
  console.log("hello")
    // this.numberOfMoles = 25
    // for(let i=0; i<this.numberOfMoles; i++){
    //   this.gameMoles.push(this.numberOfMoles)
    // }
}
}
