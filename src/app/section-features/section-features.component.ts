import { Component, OnInit } from '@angular/core';

import { ListService } from "../list/list.service";

@Component({
  selector: 'app-section-features',
  templateUrl: './section-features.component.html',
  styleUrls: ['./section-features.component.css']
})
export class SectionFeaturesComponent implements OnInit {

  list: {};
  constructor(private listService: ListService) {
    this.list = this.listService.getFeaturesList();
  }

  ngOnInit() {
  }

}
