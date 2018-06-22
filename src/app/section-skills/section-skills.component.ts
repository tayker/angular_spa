import { Component, OnInit } from '@angular/core';

import { ListService } from "../list/list.service";

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.css']
})
export class SectionSkillsComponent implements OnInit {

  list: {};
  constructor(private listService: ListService) {
    this.list = this.listService.getSlillsList();
  }

  ngOnInit() {
  }

}
