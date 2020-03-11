import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProduitsComponent } from './gestion-de-ventes/produits/produits.component';
import { FournisseursComponent } from './gestion-de-ventes/fournisseurs/fournisseurs.component';
import { ClientsComponent } from './gestion-de-ventes/clients/clients.component';
import { ProduitComponent } from './gestion-de-ventes/produits/produit-list/produit/produit.component';
import { ClientComponent } from './gestion-de-ventes/clients/client-list/client/client.component';
import { ProduitDetailComponent } from './gestion-de-ventes/produits/produit-list/produit-detail/produit-detail.component';
import { ClientDetailComponent } from './gestion-de-ventes/clients/client-list/client-detail/client-detail.component';
import { ClientListComponent } from './gestion-de-ventes/clients/client-list/client-list.component';
import { ProduitListComponent } from './gestion-de-ventes/produits/produit-list/produit-list.component';



const routes: Routes = [
    {
        path: "produits",
        component: ProduitsComponent,
        children: [
            {
              path: "", component: ProduitListComponent
            },
            {
              path: 'details/:id', component: ProduitDetailComponent
            }
          ]
    },
    {
        path: "clients",
        component: ClientsComponent,
        children: [
            {
              path: "", component: ClientListComponent
            },
            {
              path: 'details/:id', component: ClientDetailComponent
            }
          ]
    },
    {
        path: "fournisseurs",
        component: FournisseursComponent
    },
    {
        path: "",
        redirectTo: "produits",
        pathMatch: "full"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
