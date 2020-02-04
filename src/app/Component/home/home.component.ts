import { Component, OnInit } from '@angular/core';
//import { AuthenticationService } from 'src/app/services/authentication.service';
//import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
    }
    useLanguage(language: string) {
        this.translate.use(language);
    }
  // username = '';
  // constructor(private authenticationService: AuthenticationService,
  // private router: Router) { 
  //   this.authenticationService.getUserName()
  //   .subscribe(
  //     data => this.username= data.toString(),
  //    // error => this.router.navigate(['/login'])
  //   )
  // }
 
  ngOnInit() {
  }

}
