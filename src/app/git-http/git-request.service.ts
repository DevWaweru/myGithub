import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';
import { HttpClient } from '@angular/common/http';
import { Users } from '../git-class/users';

@Injectable()
export class GitRequestService {
  users:Users;

  constructor(private http:HttpClient) { 
    this.users = new Users ("","",0,false,new Date(),0,0);
  }

  gitUser(){
    interface ApiResponse{
      name:string;
      avatar_url:string;
      public_repos:number;
      hireable:boolean;
      created_at:Date;
      followers:number;
      following:number;      
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/devwaweru?access_token=2e74c4eee677727babc2c9cc3360499d0b7ec391").toPromise().then(getResponse=>{
        console.log(getResponse);
        this.users.name = getResponse.name;
        this.users.avatar_url = getResponse.avatar_url;
        this.users.public_repos = getResponse.public_repos;
        this.users.hireable = getResponse.hireable;
        this.users.created_at = getResponse.created_at;
        this.users.followers = getResponse.followers;
        this.users.following = getResponse.following;
        resolve();
      },error=>{
        console.log("Loading has Failed. Try Again later");
        reject(error);
      })
    })
    return promise;
  }

}
