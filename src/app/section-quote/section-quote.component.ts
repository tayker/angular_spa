import { Component, OnInit } from '@angular/core';

import { ListService } from "../list/list.service";

@Component({
  selector: 'app-section-quote',
  templateUrl: './section-quote.component.html',
  styleUrls: ['./section-quote.component.css']
})
export class SectionQuoteComponent implements OnInit {

  list: {};
  constructor(private listService: ListService) {
    this.list = this.listService.getQuotesList();
  }

  ngOnInit() {
  }

}
