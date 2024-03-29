import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { TvDetailsComponent } from './pages/tv-details/tv-details.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tvshows', component: TvShowsComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'tv_details/:id', component: TvDetailsComponent },
  { path: 'search/:string', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
