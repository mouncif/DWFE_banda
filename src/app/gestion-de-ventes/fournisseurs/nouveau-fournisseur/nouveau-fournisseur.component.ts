import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FournisseurService } from '../../services/fournisseur.service';
import { Fournisseur } from '../../models/fournisseur.model';

@Component({
  selector: 'app-nouveau-fournisseur',
  templateUrl: './nouveau-fournisseur.component.html',
  styleUrls: ['./nouveau-fournisseur.component.css']
})
export class NouveauFournisseurComponent implements OnInit {
  fournisseur: Fournisseur = new Fournisseur();
  id: number;

  constructor(
    private fournisseurService: FournisseurService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onClickSave() {
      this.fournisseurService.add(this.fournisseur).subscribe();
      this.router.navigate(["/", "fournisseurs"]);
  }

}
