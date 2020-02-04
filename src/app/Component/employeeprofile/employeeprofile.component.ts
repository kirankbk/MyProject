import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({    
    selector: 'app-employeeprofile',
    templateUrl: 'employeeprofile.component.html',
    styleUrls: ['employeeprofile.component.css']
})
export class EmployeeprofileComponent implements OnInit {
    datalist;
    constructor(private http: HttpClient) { }

    ngOnInit() {

        this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {

            //  console.log(data)
            this.datalist = data;
            // console.log( this.httpdata);
        });

    }
}

