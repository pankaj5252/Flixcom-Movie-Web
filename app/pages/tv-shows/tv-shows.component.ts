import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent {
  isLoading: boolean = true;
  Tvlatestshow: any = [];
  currentPage: number = 1;
  totalPages:any;
  constructor(private Api: ApiService) {
    this.getLatestTvShow();
  }

  getLatestTvShow() {
    this.isLoading = true;
    this.Api.getTopTvShow(this.currentPage).subscribe((res: any) => {
      console.log(res);
      this.currentPage = res.page;
      this.totalPages = res.total_pages;
      this.Tvlatestshow = res.results;
      this.isLoading = false;
    })
  }

  nextPage() {
    this.isLoading = true;
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getLatestTvShow();
      this.isLoading = false;
    }
  }
  previousPage() {
    if (this.currentPage > this.totalPages) {
      this.currentPage--;
      this.getLatestTvShow();
    }
  }

  searchForm = new FormGroup({
    'search': new FormControl('')
  })

  onSubmit() {
    if (this.searchForm.valid) {
      this.Api.searchTvShows(this.searchForm.value.search).subscribe((res: any) => {
        this.Tvlatestshow = res.results;
        this.searchForm.reset();
      })
    }
  }
}
