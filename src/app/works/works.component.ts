import { Component, OnInit } from '@angular/core';

import { Work } from './work';
import { WORKS } from './mock-works';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})

export class WorksComponent implements OnInit {

  works = WORKS;

  selectedWork: Work;

  constructor() { }

  ngOnInit() {
  }

  onSelect(work: Work): void {
    this.selectedWork = work;
  }

}
