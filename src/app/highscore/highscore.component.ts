import { Component, OnInit } from '@angular/core';
import { leaderboard } from '../moledata';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-highscore',
  template: `
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Points</th>
          <th>Speed</th>
        </tr>
      </thead>
      <tbody>
        <tr class="highscoreBody" *ngFor="let leader of leaders | async">
          <td>{{leader.data.name}}</td>
          <td>{{leader.data.points}}</td>
          <td>{{leader.data.speed}}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
  `]
})
export class HighscoreComponent implements OnInit{
  leaderboardList:AngularFirestoreCollection<leaderboard>;
  leaders:any;
  constructor(private __afs:AngularFirestore){}

  ngOnInit(): void {
    this.leaderboardList = this.__afs.collection('moleWhackers', (ref)=>ref.orderBy("points", "desc").limit(10));
     this.leaders = this.leaderboardList.snapshotChanges().pipe(
       map(actions => {
         return actions.map( a => {
           const data = a.payload.doc.data() as leaderboard;
           const id = a.payload.doc.id;
           return {id, data};
         })
       })
     )
  }
}
