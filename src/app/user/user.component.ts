import { Component } from '@angular/core';
import { gameMode, leaderboard } from '../moledata';
import { MoleService } from '../mole.service';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-user',
  template: `
    <h1>User data</h1> 
     <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" class="form-control" formControlName="name" required>
      </div>
      <button class="btn btn-primary" type="submit">Submit</button>
     </form>
  `,
  styles: [`
  .btn {
    margin:10px;
  }
  `]
})
export class UserComponent {

    form = new FormGroup ({
    name: new FormControl('')
    });
    
    constructor(
      public __moleService:MoleService,
      private __afs: AngularFirestore,
      private __router:Router
      ){}
      
      onSubmit(){
     let newWhacker:leaderboard =  // object that takes input for name and points/ speed from the game mode.
     {
      name: (this.form.controls.name.value),
      points:this.__moleService.points.points, 
      speed:this.__moleService.fastestTime.fastestTime
     }
    this.__afs.collection('moleWhackers').add(newWhacker) // Sends newWhacker object to firebase
    this.__router.navigate(['highscores'])
   }
}
