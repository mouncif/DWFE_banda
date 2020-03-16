import { Component, OnInit } from '@angular/core';

import { PageNameService } from '../page-name.service';

@Component({
  selector: 'app-display-panel',
  templateUrl: './display-panel.component.html',
  styleUrls: ['./display-panel.component.css']
})
export class DisplayPanelComponent implements OnInit {
  pageName: string;
  constructor(private pageNameService: PageNameService) { }

  ngOnInit() {
    this.pageNameService.pageName.subscribe(
      (pagename) => {
        this.pageName = pagename;
      }
    );
  }

}
