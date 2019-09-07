import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; // Add this
import { ListComponent } from './list/list.component'; // Add this
import { MoviesComponent} from './movies/movies.component';
import {MoviedetailsComponent} from './moviedetails/moviedetails.component'; // Add this


const routes: Routes = [
  // { path: '', component: HomeComponent },              // Add this
  { path: '', component: MoviesComponent},              // Add this
  { path: 'list', component: ListComponent },          // Add this
  { path: 'movies', component: MoviesComponent },           // Add this
  { path: 'moviedetails', component: MoviedetailsComponent }           // Add this
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
