import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { Role } from '../models/role.model';
import { PageNameService } from '../../page-name.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private pageNameService: PageNameService
  ) { }

  ngOnInit() {
    if(this.authenticationService.currentUserValue.role != Role.Admin){
      this.router.navigate(["/", "produits"]);
    }
    this.pageNameService.pageName.emit("utilisateurs");
  }

}
