import { Component, OnInit } from '@angular/core';
import { GitRequestService } from '../git-http/git-request.service';

@Component({
  selector: 'app-git-repos',
  templateUrl: './git-repos.component.html',
  styleUrls: ['./git-repos.component.css'],
  providers:[GitRequestService]
})
export class GitReposComponent implements OnInit {

  constructor(private gitRepoRequest:GitRequestService) { }

  ngOnInit() {
  }

}
