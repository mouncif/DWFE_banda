import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../utilisateurs-et-droits/services/authentication.service';
import { Role } from '../../utilisateurs-et-droits/models/role.model';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  isAdminOrEditor: boolean = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    if(this.authenticationService.currentUserValue.role == Role.Admin || this.authenticationService.currentUserValue.role == Role.Editor ){
      this.isAdminOrEditor = true;
    }
  }

}
