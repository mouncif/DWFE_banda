import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../utilisateurs-et-droits/services/authentication.service';
import { Role } from '../../utilisateurs-et-droits/models/role.model';
import { PageNameService } from '../../page-name.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  isAdminOrEditor: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private pageNameService: PageNameService
  ) { }

  ngOnInit() {
    if(this.authenticationService.currentUserValue.role == Role.Admin || this.authenticationService.currentUserValue.role == Role.Editor ){
      this.isAdminOrEditor = true;
    }
    this.pageNameService.pageName.emit("clients");
  }

}
