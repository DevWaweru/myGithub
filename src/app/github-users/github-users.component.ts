import { Component, OnInit } from '@angular/core';
import { GitRequestService } from '../git-http/git-request.service';
import { Users } from '../git-class/users';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css'],
  providers:[GitRequestService]
})
export class GithubUsersComponent implements OnInit {
  public nameToSearch = 'devwaweru';
  public newName;
  users:Users;

  searchUser(name){
    this.newName='';
    for(var i=0;i<name.length;i++){
      if(name.charAt(i)===" "||name.charAt(i)==="?"||name.charAt(i)==="/"){
      alert(`Invalid name: enter name again`);
      this.newName = 'devwaweru';
      break;
      }else if(name.charAt(i)!==" "||name.charAt(i)!=="?"||name.charAt(i)!=="/"){
        this.newName = this.newName.concat(name.charAt(i));
        console.log(name.charAt(i));
      } 
    }
    this.nameToSearch=this.newName;
    console.log(this.newName);
    this.ngOnInit();
  }

  constructor(private gitUserRequests:GitRequestService) { }

  ngOnInit() {
    this.gitUserRequests.gitUser(this.nameToSearch);
    // console.log(this.gitUserRequests.users);
    this.users=this.gitUserRequests.users;
    // this.users.created_at = new Date(this.users.created_at);
    // console.log(this.users);
  }

}
