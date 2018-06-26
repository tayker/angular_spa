import { Component, OnInit } from '@angular/core';

import { ListService } from "../list/list.service";

@Component({
  selector: 'app-section-members',
  templateUrl: './section-members.component.html',
  styleUrls: ['./section-members.component.css']
})
export class SectionMembersComponent implements OnInit {

  list: {};
  constructor(private listService: ListService) {
    this.list = this.listService.getMembersList();
  }

  ngOnInit() {
  }

}
