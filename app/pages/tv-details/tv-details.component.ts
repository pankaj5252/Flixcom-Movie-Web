import { ActivatedRoute } from '@angular/router';
import { Component, Sanitizer } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent {
  isLoading: boolean = true;
  TvId: any;
  TvDetails: any;
  baseUrl: string = 'https://www.youtube.com/embed/';
  key: any;
  Video: SafeResourceUrl = '';
  constructor(private route: ActivatedRoute, private Api: ApiService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.TvId = params['id'];
      this.Api.getTvDetails(this.TvId).subscribe((res: any) => {
        this.TvDetails = res;
        this.isLoading = false;
      })
    })
  }

  getVideo() {
    // this.isLoading = true;
    this.Api.GetVideoByIdTv(this.TvId).subscribe((res: any) => {
      this.key = res.results[0].key;
      this.Video = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.baseUrl}${this.key}`);
      console.log(this.Video);
      // this.isLoading = false;
    })
  }

}
