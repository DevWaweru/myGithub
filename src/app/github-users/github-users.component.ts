import { Component, OnInit } from '@angular/core';
import { GitRequestService } from '../git-http/git-request.service';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css'],
  providers:[GitRequestService]
})
export class GithubUsersComponent implements OnInit {

  constructor(private gitUserRequests:GitRequestService) { }

  ngOnInit() {
    this.gitUserRequests.gitUser();
  }

}
