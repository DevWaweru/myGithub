import { Component, OnInit } from '@angular/core';
import { GitRequestService } from '../git-http/git-request.service';
import { Repos } from '../git-class/repos';

@Component({
  selector: 'app-git-repos',
  templateUrl: './git-repos.component.html',
  styleUrls: ['./git-repos.component.css'],
  providers:[GitRequestService]
})
export class GitReposComponent implements OnInit {
  repos:Repos;
  public newName:string = ""
  public nameToSearch:string;

  searchRepos(name){
    for(var i=0;i<name.length;i++){
      if(name.charAt(i)===" "){
        this.newName = this.newName.concat("+");
      } else if(name.charAt(i)!==" "){
        this.newName = this.newName.concat(name.charAt(i))
      }
    }
    
    console.log(this.newName);
    // this.ngOnInit();
  }

  constructor(private gitRepoRequest:GitRequestService) { }

  ngOnInit() {
    // this.gitRepoRequest.gitRepos(this.nameToSearch);
    // console.log(this.gitRepoRequest);
  }

}
