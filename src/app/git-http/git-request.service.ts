import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GitRequestService {

  constructor(private http:HttpClient) { }

  gitUser(){
    let promise = new Promise((resolve,reject)=>{
      this.http.get("https://api.github.com/users/devwaweru?access_token=2e74c4eee677727babc2c9cc3360499d0b7ec391").toPromise().then(getResponse=>{
        console.log(getResponse);
      })
    })
  }

}
