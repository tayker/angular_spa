import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private isHovered: boolean;
  constructor() { }

  onMouseEnter(){
    this.isHovered = !this.isHovered;
  }
  onMouseLeave(){
    this.isHovered = !this.isHovered;
  }
  ngOnInit() {
  }
}
