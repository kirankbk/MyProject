import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
declare var $: any;


@Component({
  selector: 'app-header',  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    lan: any;
    constructor(private myRoute: Router, private translate: TranslateService) { }

    ngOnInit() {
        debugger
        this.lan = localStorage.getItem('selectedlang');
        this.translate.use(this.lan);
   }


   logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    this.myRoute.navigate(["/login"]);
}
}
