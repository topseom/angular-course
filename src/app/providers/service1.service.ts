import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Service1Service {
  api_user = 'https://raw.githubusercontent.com/topseom/data/master/users.json';
  constructor(public http:HttpClient){ }
  loadUser():Promise<any>{
    return new Promise((resolve,reject)=>{
      this.http.get(this.api_user).subscribe(res=>{
        setTimeout(()=>{
          resolve(res);
        },3000);
      },err=>{
        reject(err);
      });
    });
  }
}
