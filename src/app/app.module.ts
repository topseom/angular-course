import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app.material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component'; 

import { RouterModule,Routes } from '@angular/router';
import { Page3Component } from './pages/page3/page3.component';
import { Subpage1Component } from './pages/page1/subpage1/subpage1.component';
import { NotfoundComponent } from './pages/notfound/notfound.component'; 

import { HttpClientModule } from '@angular/common/http';
import { Service1Service } from './providers/service1.service';
import { MoviesService } from './providers/movies.service';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component'; 

const routes:Routes = [
  { path:'',component:HomeComponent  },
  { path:'page1',component:Page1Component },
  { path:'page1/subpage1',component:Subpage1Component },
  { path:'page2',component:Page2Component },
  { path:'page3/:id',component:Page3Component },
  { path:'list/:id',component:MovieListComponent },
  { path:'movie/:id',component:MovieDetailComponent },
  { path:'**',component:NotfoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Subpage1Component,
    NotfoundComponent,
    MovieListComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [Service1Service, MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
