import { Component, OnInit } from '@angular/core';

import { ListService } from "../list/list.service";

@Component({
  selector: 'app-section-markers',
  templateUrl: './section-markers.component.html',
  styleUrls: ['./section-markers.component.css']
})
export class SectionMarkersComponent implements OnInit {

  list: {};
  constructor(private listService: ListService) {
    this.list = this.listService.getMarkerList();
  }

  ngOnInit() {
  }

}
