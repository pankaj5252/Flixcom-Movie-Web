import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  page = 1;
  MoviesData: any = [];
  trandingMoviesData: any = [];
  TvShowData: any = [];
  inputValue: any;
  TopRated: any
  active1: boolean = true;
  active2: boolean = false;
  active3: boolean = true;
  active4: boolean = false;
  active5: boolean = true;
  active6: boolean = false;
  TopMovies: boolean = false;
  TopTv: boolean = true;
  active: boolean = false;

  constructor(private api: ApiService, private router: Router) {
    this.active = true;
    this.getMovie();
    this.trandingMovieDay();
    this.getTvShow();
    this.TopRatedTv();
    this.active = false;

  }
  getMovie() {
    this.api.bannerApiData().subscribe((res: any) => {
      this.MoviesData = res.results;
      // console.log(this.MoviesData);
    })
  }

  trandingMovieDay() {
    this.active = true;
    this.api.trandingMovieDay().subscribe((res: any) => {
      this.trandingMoviesData = res.results;
      console.log(res.results);
      this.active = false;
    })
  }

  getTvShow() {
    this.active = true;
    this.api.trandingTvShowDay().subscribe((res: any) => {
      this.TvShowData = res.results;
      this.active = false;
    })
  }

  getValue() {
    // console.log(this.inputValue);
    this.router.navigate(['search/', this.inputValue])
  }

  TopRatedTv() {
    this.active = true;
    this.api.getTopTvShow(this.page).subscribe((res: any) => {
      this.TopRated = res.results;
      this.active = false;
    })
  }

  changelist() {
    this.active = true;
    this.active2 = false;
    this.active1 = !this.active1;
    this.api.trandingMovieDay().subscribe((res: any) => {
      this.trandingMoviesData = res.results;
      this.active = false;
    })
  }
  changelist1() {
    this.active = true;
    this.active1 = false;
    this.active2 = !this.active2;
    this.api.trandingMovieWeek().subscribe((res: any) => {
      this.trandingMoviesData = res.results;
      this.active = false;
    })
  }

  changelistTv() {
    this.active = true;
    this.active4 = false;
    this.active3 = !this.active3;
    this.api.trandingTvShowDay().subscribe((res: any) => {
      this.TvShowData = res.results;
      this.active = false;
    })
  }

  changelistTv1() {
    this.active = true;
    this.active3 = false;
    this.active4 = !this.active4;
    this.api.trandingTvShowWeek().subscribe((res: any) => {
      this.TvShowData = res.results;
      this.active = false;
    })
  }

  changelisttop() {
    this.active = true;
    this.TopTv = true;
    this.TopMovies = false;
    this.active6 = false;
    this.active5 = !this.active5;
    this.api.getTopTvShow(this.page).subscribe((res: any) => {
      this.TopRated = res.results;
      this.active = true;
    })
  }

  changelisttop1() {
    this.active = true;
    this.TopTv = false;
    this.TopMovies = true;
    this.active5 = false;
    this.active6 = !this.active6;
    this.api.getTopMovie().subscribe((res: any) => {
      this.TopRated = res.results;
      this.active = false;
    })
  }
}
