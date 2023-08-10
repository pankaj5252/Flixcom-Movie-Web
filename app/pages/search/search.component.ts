import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  isLoading: boolean = true;
  searchDAta: any
  movie: any;
  constructor(private Api: ApiService, private route: ActivatedRoute) {
    this.isLoading = true;
    route.params.subscribe((params: any) => {
      this.movie = params['string'];
      // console.log(this.movie);
      this.Api.searchAll(this.movie).subscribe((res: any) => {
        console.log(res.results);
        this.searchDAta = res.results;
        this.isLoading = false;
      })
    })
  }
}
