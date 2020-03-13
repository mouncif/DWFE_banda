import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ClientService } from '../../../services/client.service';
import { Client } from '../../../models/client.model';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  client: Client;
  tabClient: Client[];
  id: number;

  constructor(
    private clientService: ClientService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
      this.id = this.activatedRoute.snapshot.params.id;
      this.tabClient = this.clientService.clients;

      for(let i = 0; i < this.tabClient.length; i++){
          if(this.id == this.tabClient[i].id){
              this.client = this.tabClient[i];
          }
      }
  }

}
