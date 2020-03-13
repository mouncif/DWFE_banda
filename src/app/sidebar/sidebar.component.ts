import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthenticationService } from '../utilisateurs-et-droits/services/authentication.service';
import { Role } from '../utilisateurs-et-droits/models/role.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  position: string = 'produits';
  role: Role;
  isAdmin: boolean = false;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
      if(this.authenticationService.currentUserValue.role == Role.Admin){
          this.isAdmin = true;
      }
  }

  onClckSidebarItem(item: string){
    this.position = item;
    this.router.navigate([item]);
  }

}
