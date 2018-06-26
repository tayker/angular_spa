import { Component, OnInit } from '@angular/core';

import { ListService } from "../list/list.service";

@Component({
  selector: 'app-section-facts',
  templateUrl: './section-facts.component.html',
  styleUrls: ['./section-facts.component.css']
})
export class SectionFactsComponent implements OnInit {

  list: {};
  constructor(private listService: ListService) {
    this.list = this.listService.getFactsList();
  }

  ngOnInit() {
  }

}
