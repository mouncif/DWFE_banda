import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FournisseurService } from '../../../services/fournisseur.service';
import { Fournisseur } from '../../../models/fournisseur.model';


@Component({
  selector: 'app-fournisseur-edit',
  templateUrl: './fournisseur-edit.component.html',
  styleUrls: ['./fournisseur-edit.component.css']
})
export class FournisseurEditComponent implements OnInit {
  fournisseur: Fournisseur;
  tabFournisseur: Fournisseur[];
  id: number;

  constructor(
    private fournisseurService: FournisseurService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
      this.id = this.activatedRoute.snapshot.params.id;
      this.fournisseurService.findFournisseur(this.id).subscribe(
        (fournisseur) => {
          this.fournisseur = fournisseur;
        }
      )
  }

  onClickSave() {
      this.fournisseurService.update(this.fournisseur).subscribe();
  }

  onClickReset(){
    this.fournisseurService.findFournisseur(this.id).subscribe(
      (client) => {
        this.fournisseur = client;
      }
    )
  }

  onClickDelete(){
    this.fournisseurService.delete(this.fournisseur.id).subscribe();
  }
}
