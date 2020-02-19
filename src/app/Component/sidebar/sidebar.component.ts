import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  errorMsg: string = "";
  isCollapsed: boolean = false;
  isMaximised: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  fullScreenClicked() {
    this.isMaximised =this.CheckPanelMaximised(this.isMaximised);
};


 CheckPanelMaximised(IsMaximised: boolean) {
  let body = document.getElementsByTagName('body')[0];
  IsMaximised = !IsMaximised;
  if (IsMaximised) {
      body.classList.add("body-expanded");
  }
  else {
      body.classList.remove("body-expanded");
  }

  return IsMaximised;
}

}
