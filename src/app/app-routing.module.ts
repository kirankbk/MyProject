import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from  './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { surveyComponent } from './Component/survey/survey.component';
import { HolidayComponent } from './Component/holiday/holiday.component';
import { FeedbackComponent } from './Component/feedback/feedback.component';
import { MediagalleryComponent } from './Component/mediagallery/mediagallery.component';
import { AwardsandrecognitionComponent } from './Component/awardsandrecognition/awardsandrecognition.component';
import { ProductinformationComponent } from './Component/productinformation/productinformation.component';
import { PolicyComponent } from './Component/policy/policy.component';
import { EmployeeprofileComponent } from './Component/employeeprofile/employeeprofile.component';
import { JobpostinguserComponent } from './Component/jobpostinguser/jobpostinguser.component';
import { JobpostingadminComponent } from './Component/jobpostingadmin/jobpostingadmin.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
   {
    path: 'home', component: HomeComponent 
    },     
  {
    path: '', 
    redirectTo: '/login',
    pathMatch: 'full' 
  },
  
  {
    path: '',component: HomeComponent, children:[

    
    
         {  path: 'holiday' ,component:HolidayComponent },      
        { path: 'survey', component: surveyComponent      },
         {  path: 'feedback',  component: FeedbackComponent      },
         {  path:'emp', component:MediagalleryComponent, outlet:'mediagalleryout'   },
         {  path: 'awardsandrecognition',  component: AwardsandrecognitionComponent      },
         {  path: 'productinformation',  component: ProductinformationComponent      },
         {  path: 'policy',    component: PolicyComponent      },
        { path: 'EmployeeProfile', component: EmployeeprofileComponent      },
         {  path: 'jobpostinguser',      component:  JobpostinguserComponent      },
         {  path: 'jobpostingadmin',      component:  JobpostingadminComponent   }
        
    ]
  },

{ path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
