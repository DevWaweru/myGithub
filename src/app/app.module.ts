import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GithubUsersComponent } from './github-users/github-users.component';
import { GitReposComponent } from './git-repos/git-repos.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubUsersComponent,
    GitReposComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
