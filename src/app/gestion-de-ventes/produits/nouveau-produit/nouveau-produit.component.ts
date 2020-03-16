import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProduitService } from '../../services/produit.service';
import { Produit } from '../../models/produit.model';

@Component({
  selector: 'app-nouveau-produit',
  templateUrl: './nouveau-produit.component.html',
  styleUrls: ['./nouveau-produit.component.css']
})
export class NouveauProduitComponent implements OnInit {
  produit: Produit = new Produit();
  id: number;

  constructor(
    private router: Router,
    private produitService: ProduitService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onClickSave() {
      this.produitService.add(this.produit).subscribe();
      this.router.navigate(["/", "produits"]);
  }

  onFileSelected(event){
    this.produit.image = "./assets/img/" + event.target.files[0].name;
  }
}
