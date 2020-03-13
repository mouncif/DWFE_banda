import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";



import { MaterialModule } from "../material/material.module";
import { ProduitsComponent } from './produits/produits.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { ClientsComponent } from './clients/clients.component';
import { ProduitComponent } from './produits/produit-list/produit/produit.component';
import { ClientComponent } from './clients/client-list/client/client.component';
import { ProduitDetailComponent } from './produits/produit-list/produit-detail/produit-detail.component';
import { ClientDetailComponent } from './clients/client-list/client-detail/client-detail.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ProduitListComponent } from './produits/produit-list/produit-list.component';
import { ProduitEditComponent } from './produits/produit-list/produit-edit/produit-edit.component';
import { ClientEditComponent } from './clients/client-list/client-edit/client-edit.component';
import { FournisseurEditComponent } from './fournisseurs/fournisseur-list/fournisseur-edit/fournisseur-edit.component';
import { FournisseurListComponent } from './fournisseurs/fournisseur-list/fournisseur-list.component';

@NgModule({
  declarations: [
    ProduitsComponent,
    FournisseursComponent,
    ClientsComponent,
    ProduitComponent,
    ClientComponent,
    ProduitDetailComponent,
    ClientDetailComponent,
    ClientListComponent,
    ProduitListComponent,
    ProduitEditComponent,
    ClientEditComponent,
    FournisseurEditComponent,
    FournisseurListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    ProduitsComponent,
    FournisseursComponent,
    ClientsComponent,
    ProduitComponent,
    ClientComponent,
    ProduitDetailComponent,
    ClientDetailComponent
  ]
})
export class GestionDeVentesModule { }
