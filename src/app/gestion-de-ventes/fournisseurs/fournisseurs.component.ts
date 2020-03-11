import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import { FournisseurService } from '../services/fournisseur.service';
import  { Fournisseur } from '../models/fournisseur.model';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})

export class FournisseursComponent implements OnInit {
  fournisseurs: Fournisseur[];
  displayedColumns: string[] = ['id', 'nom', 'nom_court', 'ville', 'adresse', 'tel_fix', 'tel_mobile', 'fax', 'email'];
  dataSource;

  constructor(private fournisseurService: FournisseurService) { }

  ngOnInit() {
      this.fournisseurs = this.fournisseurService.fournisseurs;
      this.dataSource = new MatTableDataSource(this.fournisseurs);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
