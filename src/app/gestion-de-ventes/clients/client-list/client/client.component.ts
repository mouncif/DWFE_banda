import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { Client } from '../../../models/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  @Input("clientItem") client: Client;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickClient(){
      this.router.navigate(['/', 'clients', 'details', this.client.id]);
      console.log("clicked");
  }

}
