import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MoviesService {
  api_movie_home = "https://raw.githubusercontent.com/topseom/data/master/movie_home.json";
  api_movies = "https://raw.githubusercontent.com/topseom/data/master/movies.json";
  
  constructor(public http:HttpClient){

  }

  loadMovieHome():Promise<any>{
    return new Promise((resolve,reject)=>{
      this.http.get(this.api_movie_home).subscribe(data=>{
        setTimeout(()=>{
          resolve(data);
        },1000);
      },err=>{
        reject(err);
      });
    });
  }
  loadMovieList(category_id:string):Promise<any>{
    return new Promise((resolve,reject)=>{
      this.http.get(this.api_movies).subscribe((data:Array<any>)=>{
        let items = data.filter(item=>{
          return item.category === category_id;
        });
        resolve(items);
      },err=>{
        reject(err);
      });
    });
  }
  loadMovieDetail(movie_id:string):Promise<any>{
    return new Promise((resolve,reject)=>{
      this.http.get(this.api_movies).subscribe((data:Array<any>)=>{
        let item = data.find(item=>{
          return item.id === movie_id;
        });
        resolve(item);
      },err=>{
        reject(err);
      });
    });
  }
}
