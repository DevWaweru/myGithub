import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GithubUsersComponent } from './github-users/github-users.component';
import { GitReposComponent } from './git-repos/git-repos.component';
import { SearchComponent } from './search/search.component';
//Routing module
import { RoutingModule } from './routing/routing.module';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubUsersComponent,
    GitReposComponent,
    SearchComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
