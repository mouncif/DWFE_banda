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
  client: Client = new Client();;
  id: number;

  constructor(
    private clientService: ClientService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
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
