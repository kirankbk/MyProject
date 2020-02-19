import { Component, OnInit ,NgZone} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertService } from 'src/app/services/alert.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    language: string;
    errorMsg: any;
    isSubmitted: boolean = false;
    constructor(private router: Router, private translate: TranslateService,
        public zone: NgZone,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService,
        private formBuilder: FormBuilder,
        private alertService: AlertService) {
                this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            langauge: ['', Validators.required]
        });

    }


    ngOnInit() {
debugger
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        //this.lan = localStorage.getItem('selectedlang');
        this.translate.use('en');
    }

    
    useLanguage(language: string) {
        debugger;
        this.translate.use(language);
        //this.selectedlanguage = language;
    }

    get formControls() { return this.loginForm.controls; }

    login() {
        debugger
        this.submitted = true;

        // stop here if form is invalid
        //if (this.loginForm.invalid) {
        //    return;
        //}

        this.loading = true;
        if (this.loginForm.valid) {
            //this.authenticationService.login(this.loginForm.value)
            //  .subscribe(
            //    data => {
            //      console.log(data);
            //      localStorage.setItem('token', data.toString());

            //  },
            //  error => {
            //    this.alertService.error(error);
            //    this.loading = false;
            //});
            ///  }

            this.loginForm.value.langauge
            this.router.navigate(['/home']);
            localStorage.setItem('selectedlang', this.loginForm.value.langauge);

        }

        else
            this.errorMsg = this.translate.instant("pleaseEnter");
        this.translate.get('pleaseEnter').subscribe(() => {
            // You can call instant() here
            this.errorMsg = this.translate.instant("pleaseEnter");
        });


    }
}
