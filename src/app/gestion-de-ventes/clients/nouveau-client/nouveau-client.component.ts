import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';
import { AuthenticationService } from '../../../utilisateurs-et-droits/services/authentication.service';
import { Role } from '../../../utilisateurs-et-droits/models/role.model';

@Component({
  selector: 'app-nouveau-client',
  templateUrl: './nouveau-client.component.html',
  styleUrls: ['./nouveau-client.component.css']
})
export class NouveauClientComponent implements OnInit {
  client: Client = new Client();

  constructor(
    private clientService: ClientService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    if(this.authenticationService.currentUserValue.role != Role.Admin && this.authenticationService.currentUserValue.role != Role.Editor ){
      this.router.navigate(["/", "produits"]);
    };
  }

  onClickSave() {
      this.clientService.add(this.client).subscribe();
  }

}
