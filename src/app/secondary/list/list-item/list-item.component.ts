import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item: {};
  @Input() listClass;

  isHovered: boolean = false;
  constructor() { }

  onMouseEnter(){
    this.isHovered = true;
  }

  onMouseLeave(){
    this.isHovered = false;
  }
  ngOnInit() {
  }

}
