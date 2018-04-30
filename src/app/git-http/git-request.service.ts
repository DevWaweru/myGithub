import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';
import { HttpClient } from '@angular/common/http';
import { Users } from '../git-class/users';
import { Repos } from '../git-class/repos';
import { environment } from '../../environments/environment';

@Injectable()
export class GitRequestService {
  users:Users;
  repos:Repos;
  newRepo:any;
  searchRepo:any;

  constructor(private http:HttpClient) { 
    this.users = new Users ("","","","",0,false,new Date(),0,0);
    this.repos = new Repos("","","",new Date())
  }

  gitUser(searchName){
    interface ApiResponse{
      name:string;
      login:string;
      avatar_url:string;
      html_url:string;
      public_repos:number;
      hireable:boolean;
      created_at:Date;
      followers:number;
      following:number;      
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/"+searchName+"?access_token="+environment.accessToken).toPromise().then(getResponse=>{
        this.users.name = getResponse.name;
        this.users.login = getResponse.login;
        this.users.avatar_url = getResponse.avatar_url;
        this.users.html_url = getResponse.html_url;
        this.users.public_repos = getResponse.public_repos;
        this.users.hireable = getResponse.hireable;
        this.users.created_at = getResponse.created_at;
        this.users.followers = getResponse.followers;
        this.users.following = getResponse.following;
        resolve();
      },error=>{
        console.log("Loading has Failed. Try Again later");
        this.users.name = "John Doe"
        this.users.login = "johndoe"
        this.users.avatar_url = "https://i.pinimg.com/originals/86/7c/da/867cdaadd29b78e746d8ed1cfd0b044f.jpg";
        this.users.html_url = "https://github.com";
        this.users.public_repos = 0;
        this.users.hireable = false;
        this.users.created_at = new Date(Date.now());
        this.users.followers = 0;
        this.users.following = 0;
        reject(error);
      })
    })
    return promise;
  }
  // Getting the repos
  getUserRepos(searchName){
    interface ApiResponse{
      name:string;
      html_url:string;
      description:string;
      created_at:Date;
    }
    let myPromise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/"+searchName+"/repos?order=created&sort=asc?access_token="+environment.accessToken).toPromise().then(getRepoResponse=>{
        this.newRepo = getRepoResponse;
        // console.log(getRepoResponse)
        resolve();
      },error=>{
        console.log("Loading has Failed. Try Again later");
        this.newRepo.name = "My Repository";
        this.newRepo.html_url = "https://github.com/"
        this.newRepo.description = "New Empty Repo"
        this.newRepo.created_at = new Date(Date.now());
        reject(error);
      })
    })
    return myPromise;
  }

  gitRepos(searchName,toShow){
    interface ApiResponse{
      // newRepo:any
      items:any;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/search/repositories?q="+searchName+"&per_page="+toShow+"&sort=forks&order=asc?access_token="+environment.accessToken).toPromise().then(getRepoResponse=>{
        this.searchRepo = getRepoResponse.items;
        // console.log(getRepoResponse.items)
        resolve();
      },error=>{
        this.searchRepo = "Type above to make a search request"
        console.log("Loading has Failed. Try Again later");
        reject(error);
      })
    })
    return promise;
  }
}
