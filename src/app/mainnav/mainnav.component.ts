import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.scss']
})
export class MainnavComponent implements OnInit {
  
  public isCollapsed: boolean = false;
  // public closeButton = "x";

  constructor() { }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
  }

}
