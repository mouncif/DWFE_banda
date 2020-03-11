import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  position: string = 'produits';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClckSidebarItem(item: string){
    this.position = item;
    this.router.navigate([item]);
  }

}
