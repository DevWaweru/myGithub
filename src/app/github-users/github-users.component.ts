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

  users:Users;

  constructor(private gitUserRequests:GitRequestService) { }

  ngOnInit() {
    this.gitUserRequests.gitUser();
    console.log(this.gitUserRequests.users);
    this.users=this.gitUserRequests.users;
    console.log(this.users);
  }

}
