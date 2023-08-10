import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { api } from '@igniteui/material-icons-extended';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  isLoading: boolean = true;
  GetNowPlaying: any = [];
  currentPage: number = 1;
  itemsPerPage: number = 20;
  totalPages: any = 0;
  page: number = 1;


  constructor(private Api: ApiService) {
    console.log(this.currentPage);
    this.GetNowPlayingmovie();
  }

  GetNowPlayingmovie() {
    this.isLoading = true;
    this.Api.GetNowPlaying(this.currentPage).subscribe((res: any) => {
      console.log(res);
      this.GetNowPlaying = res.results;
      this.currentPage = res.page;
      this.totalPages = res.total_pages;
      this.isLoading = false;
      // this.GetNowPlaying.push(res.results);
    })
  }
  nextPage() {
    this.isLoading = true;
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.GetNowPlayingmovie();
      this.isLoading = false;
    }
  }
  previousPage() {
    if (this.currentPage > this.totalPages) {
      this.currentPage--;
      this.GetNowPlayingmovie();
    }
  }

  searchForm = new FormGroup({
    'search': new FormControl('')
  })

  onSubmit() {
    if (this.searchForm.valid) {
      this.Api.searchMovies(this.searchForm.value.search).subscribe((res: any) => {
        this.GetNowPlaying = res.results;
        console.log(this.GetNowPlaying);
        this.searchForm.reset();
      })
    }
  }

}
