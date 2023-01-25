import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MolesComponent } from './moles/moles.component';
import { UserComponent } from './user/user.component';
import { HighscoreComponent } from './highscore/highscore.component';

const routes: Routes = [
  {path: "", component: MolesComponent},
  {path: "user", component: UserComponent},
  {path: "highscores", component: HighscoreComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
