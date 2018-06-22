import { Component, OnInit } from '@angular/core';

import { ListService } from "../list/list.service";

@Component({
  selector: 'app-section-main',
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.css']
})
export class SectionMainComponent implements OnInit {

  list: {};
  navList: {};
  constructor(private listService: ListService) {
    this.list = this.listService.getOfferList();
    this.navList = this.listService.getNavList();
  }

  ngOnInit() {
  }

}
