import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../../providers/service1.service';
import { MoviesService } from '../../providers/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading:boolean = true;
  items:Array<any> = [];
  banner:string;
  constructor(
    public service1:Service1Service,
    public movies:MoviesService
  ){ 
    this.movies.loadMovieHome().then(data=>{
      this.banner = data['banner'];
      this.items = data['categories'];
      this.loading = false;
    }).catch(err=>{
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
