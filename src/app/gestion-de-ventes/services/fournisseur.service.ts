import { Injectable } from '@angular/core';
import { Fournisseur } from '../models/fournisseur.model';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  fournisseurs: Fournisseur[] = [
      new Fournisseur(1, "chiku", "cj", "settat", "adresse", "liji", "oijk", "lji", "oijk"),
      new Fournisseur(2, "chiku", "cj", "settat", "adresse", "liji", "oijk", "lji", "oijk")
  ]

  constructor() { }
}
