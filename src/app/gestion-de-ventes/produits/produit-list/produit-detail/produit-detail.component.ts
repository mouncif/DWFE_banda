import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProduitService } from '../../../services/produit.service';
import { Produit } from '../../../models/produit.model';
import { AuthenticationService } from '../../../../utilisateurs-et-droits/services/authentication.service';
import { Role } from '../../../../utilisateurs-et-droits/models/role.model';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {
  produit: Produit = new Produit();
  id: number;
  isAdminOrEditor: boolean = false;

  constructor(
    private produitService: ProduitService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
      this.id = this.activatedRoute.snapshot.params.id;
      this.produitService.findProduit(this.id).subscribe(
        (produit) => {
          this.produit = produit;
        }
      );
      if(this.authenticationService.currentUserValue.role == Role.Admin || this.authenticationService.currentUserValue.role == Role.Editor ){
        this.isAdminOrEditor = true;
      }
  }

  onClickModifier(){
      this.router.navigate(["/", "produits", "edit", this.id]);
  }

}
