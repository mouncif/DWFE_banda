import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../utilisateurs-et-droits/services/authentication.service';
import { Role } from '../../utilisateurs-et-droits/models/role.model';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {
  isAdminOrEditor: boolean = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    if(this.authenticationService.currentUserValue.role == Role.Admin || this.authenticationService.currentUserValue.role == Role.Editor ){
      this.isAdminOrEditor = true;
    }
  }

}
