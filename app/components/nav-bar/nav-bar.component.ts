import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  navbg: any;
  searchDAta: any;
  isClicked=false
  inputValue:any

  @HostListener('document:scroll') scrollover() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg = {
        'background-color': '#000000',
      }
    }
    else {
      this.navbg = {};
    }
  }

  constructor(private Api: ApiService, private router: Router) { }

  onElementClick() {
    this.isClicked = !this.isClicked;
  }

  getValue(){
    console.log(this.inputValue);
    this.router.navigate(['search/',this.inputValue])
  }

}
