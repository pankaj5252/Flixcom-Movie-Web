import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Route } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  isLoading: boolean = true;
  movieId: any;
  movieDetails: any;
  genres: any[] = [];
  baseUrl: string = 'https://www.youtube.com/embed/';
  key: any;
  Video: SafeResourceUrl = '';
  constructor(private route: ActivatedRoute, private Api: ApiService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.Api.getMovieDetails(this.movieId).subscribe((res: any) => {
        this.movieDetails = res;
        this.genres = this.movieDetails.genres;
        this.isLoading = false;
      })
    });
  }
  getVideo() {
    this.isLoading = true;
    this.Api.GetVideoByIdMovie(this.movieId).subscribe((res: any) => {
      this.key = res.results[0].key;
      this.Video = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.baseUrl}${this.key}`);
      console.log(this.Video);
      this.isLoading = false;
    })
  }
}
