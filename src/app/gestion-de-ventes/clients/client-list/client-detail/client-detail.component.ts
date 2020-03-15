import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ClientService } from '../../../services/client.service';
import { Client } from '../../../models/client.model';
import { AuthenticationService } from '../../../../utilisateurs-et-droits/services/authentication.service';
import { Role } from '../../../../utilisateurs-et-droits/models/role.model';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  client: Client = new Client();;
  id: number;
  isAdminOrEditor: boolean = false;

  constructor(
    private clientService: ClientService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
      this.id = this.activatedRoute.snapshot.params.id;
      this.clientService.findCleint(this.id).subscribe(
        (client) => {
          this.client = client;
        }
      );
      if(this.authenticationService.currentUserValue.role == Role.Admin || this.authenticationService.currentUserValue.role == Role.Editor ){
        this.isAdminOrEditor = true;
      }
  }

  onClickModifier(){
      this.router.navigate(["/", "clients", "edit", this.id]);
  }


}
