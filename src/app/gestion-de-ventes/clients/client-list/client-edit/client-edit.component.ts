import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ClientService } from '../../../services/client.service';
import { Client } from '../../../models/client.model';
import { AuthenticationService } from '../../../../utilisateurs-et-droits/services/authentication.service';
import { Role } from '../../../../utilisateurs-et-droits/models/role.model';


@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  client: Client = new Client();;
  id: number;

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
      this.id = this.activatedRoute.snapshot.params.id;
      this.clientService.findCleint(this.id).subscribe(
        (client) => {
          this.client = client;
        }
      )
  }

  onClickSave() {
      this.clientService.update(this.client).subscribe();
  }

  onClickReset(){
    this.clientService.findCleint(this.id).subscribe(
      (client) => {
        this.client = client;
      }
    )
  }

  onClickDelete(){
    this.clientService.delete(this.client.id).subscribe();
  }

}
