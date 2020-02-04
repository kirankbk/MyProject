import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import {HomeComponent} from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { surveyComponent } from './Component/survey/survey.component';
import { HolidayComponent } from './Component/holiday/holiday.component';
import { FeedbackComponent } from './Component/feedback/feedback.component'; 
import { MediagalleryComponent } from './Component/mediagallery/mediagallery.component';
import { AwardsandrecognitionComponent } from './Component/awardsandrecognition/awardsandrecognition.component';
import { ProductinformationComponent } from './Component/productinformation/productinformation.component'
import { PolicyComponent } from './Component/policy/policy.component';
import { EmployeeprofileComponent } from './Component/employeeprofile/employeeprofile.component';
import { JobpostingadminComponent } from './Component/jobpostingadmin/jobpostingadmin.component';
import { JobpostinguserComponent } from './Component/jobpostinguser/jobpostinguser.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from 'src/app/services/authentication.service';

// import ngx-translate and the http loader
import { TranslateCompiler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// import ngx-translate-messageformat-compiler
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { Injector, APP_INITIALIZER } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LOCATION_INITIALIZED } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
      surveyComponent,
    HolidayComponent,
    
    FeedbackComponent,
    MediagalleryComponent,
    AwardsandrecognitionComponent,
    ProductinformationComponent,
    PolicyComponent,
    EmployeeprofileComponent,
    JobpostingadminComponent,
    JobpostinguserComponent  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
      AlertModule.forRoot(),

      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
          },

          // compiler configuration
          compiler: {
              provide: TranslateCompiler,
              useClass: TranslateMessageFormatCompiler
          }
      })

  ],
    providers: [AuthenticationService, AuthGuard,
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializerFactory,
            deps: [TranslateService, Injector],
            multi: true
        }
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');// adding this  solution for deployment  issue which creating for deploying application 
}

export function appInitializerFactory(translate: TranslateService, injector: Injector) {
    return () => new Promise<any>((resolve: any) => {
        const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
        locationInitialized.then(() => {
            debugger;
             var lan = localStorage.getItem('selectedlang');
			  var lan = localStorage.getItem('selectedlang');
            if (lan == null)
            {
                lan = 'en';
            }
            const langToSet = 'en-GB'
           translate.setDefaultLang('en-US');
           translate.use(lan).subscribe(() => {
               console.info(`Successfully initialized '${lan}' language.'`);
           }, err => {
               console.error(`Problem with '${lan}' language initialization.'`);
           }, () => {
               resolve(null);
           });
        });
    });
}