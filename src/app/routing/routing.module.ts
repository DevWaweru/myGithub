import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { GitReposComponent } from '../git-repos/git-repos.component';
import { GithubUsersComponent } from '../github-users/github-users.component';

const routes:Routes=[
  {path:"home",component:GithubUsersComponent},
  {path:"repos",component:GitReposComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
