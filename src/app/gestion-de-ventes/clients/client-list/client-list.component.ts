import { Component, OnInit } from '@angular/core';

import { ClientService } from '../../services/client.service';
import  { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
      this.clientService.findAll().subscribe(
        (clients) => {
          this.clients = clients;
        }
      )
  }
}
