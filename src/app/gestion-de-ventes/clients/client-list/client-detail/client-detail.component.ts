import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ClientService } from '../../../services/client.service';
import { Client } from '../../../models/client.model';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
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

  onClickModifier(){
      this.router.navigate(["/", "clients", "edit", this.id]);
  }


}
