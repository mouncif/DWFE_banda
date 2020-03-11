import { Injectable } from '@angular/core';
import { Client } from '../models/client.model'


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients: Client[] = [
      new Client(1, "chiku", "banda", "status", "photo", "lkl", "likji", "liji", "oliik"),
      new Client(2, "chiku", "banda", "status", "photo", "lkl", "likji", "liji", "oliik")
  ]

  constructor() { }
}
