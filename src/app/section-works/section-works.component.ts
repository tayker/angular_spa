import { Component, OnInit } from '@angular/core';

import { ListService } from "../list/list.service";

@Component({
  selector: 'app-section-works',
  templateUrl: './section-works.component.html',
  styleUrls: ['./section-works.component.css']
})
export class SectionWorksComponent implements OnInit {

  list: {};
  constructor(private listService: ListService) {
    this.list = this.listService.getWorksList();
  }

  ngOnInit() {
  }

}
