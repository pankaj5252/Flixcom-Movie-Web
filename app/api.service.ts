import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  base_url = "https://api.themoviedb.org/3";
  apikey = "b4012c4e0aeca37d18d9f52954f55611";

  bannerApiData() {
    return this.http.get(`${this.base_url}/trending/all/week?api_key=${this.apikey}`);
  }
  trandingMovieDay() {
    return this.http.get(`${this.base_url}/trending/movie/day?api_key=${this.apikey}`);
  }
  trandingMovieWeek() {
    return this.http.get(`${this.base_url}/trending/movie/week?api_key=${this.apikey}`);
  }
  trandingTvShowDay() {
    return this.http.get(`${this.base_url}/trending/tv/day?api_key=${this.apikey}`);
  }
  trandingTvShowWeek() {
    return this.http.get(`${this.base_url}/trending/tv/week?api_key=${this.apikey}`);
  }
  GetNowPlaying(page:any) {
    return this.http.get(`${this.base_url}/movie/now_playing?api_key=${this.apikey}&page=${page}`);
  }
  getTopTvShow(page:any) {
    return this.http.get(`${this.base_url}/tv/top_rated?api_key=${this.apikey}&page=${page}`);
  }
  getTopMovie() {
    return this.http.get(`${this.base_url}/movie/top_rated?api_key=${this.apikey}`);
  }
  getMovieDetails(movie_id: any) {
    return this.http.get(`${this.base_url}/movie/${movie_id}?api_key=${this.apikey}`);
  }
  getTvDetails(tv_id: any) {
    return this.http.get(`${this.base_url}/tv/${tv_id}?api_key=${this.apikey}`);
  }
  searchAll(data: any) {
    return this.http.get(`${this.base_url}/search/multi?api_key=${this.apikey}&query=${data}`);
  }
  searchMovies(data: any) {
    return this.http.get(`${this.base_url}/search/movie?api_key=${this.apikey}&query=${data}`);
  }
  searchTvShows(data: any) {
    return this.http.get(`${this.base_url}/search/tv?api_key=${this.apikey}&query=${data}`);
  }
  GetVideoByIdMovie(id: any) {
    return this.http.get(`${this.base_url}/movie/${id}/videos?api_key=${this.apikey}`);
  }
  GetVideoByIdTv(id: any) {
    return this.http.get(`${this.base_url}/tv/${id}/videos?api_key=${this.apikey}`);
  }
}
