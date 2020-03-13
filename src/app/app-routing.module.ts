import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from './utilisateurs-et-droits/auth.guard';

import { ProduitsComponent } from './gestion-de-ventes/produits/produits.component';
import { FournisseursComponent } from './gestion-de-ventes/fournisseurs/fournisseurs.component';
import { ClientsComponent } from './gestion-de-ventes/clients/clients.component';
import { ProduitComponent } from './gestion-de-ventes/produits/produit-list/produit/produit.component';
import { ClientComponent } from './gestion-de-ventes/clients/client-list/client/client.component';
import { ProduitDetailComponent } from './gestion-de-ventes/produits/produit-list/produit-detail/produit-detail.component';
import { ClientDetailComponent } from './gestion-de-ventes/clients/client-list/client-detail/client-detail.component';
import { ClientListComponent } from './gestion-de-ventes/clients/client-list/client-list.component';
import { ProduitListComponent } from './gestion-de-ventes/produits/produit-list/produit-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './utilisateurs-et-droits/users/users.component';
import { UserListComponent } from './utilisateurs-et-droits/users/user-list/user-list.component';
import { UserComponent } from './utilisateurs-et-droits/users/user-list/user/user.component';
import { UserDetailComponent } from './utilisateurs-et-droits/users/user-list/user-detail/user-detail.component';
import { UserEditComponent } from './utilisateurs-et-droits/users/user-list/user-edit/user-edit.component';
import { ProduitEditComponent } from './gestion-de-ventes/produits/produit-list/produit-edit/produit-edit.component';
import { ClientEditComponent } from './gestion-de-ventes/clients/client-list/client-edit/client-edit.component';
import { FournisseurEditComponent } from './gestion-de-ventes/fournisseurs/fournisseur-list/fournisseur-edit/fournisseur-edit.component';
import { FournisseurListComponent } from './gestion-de-ventes/fournisseurs/fournisseur-list/fournisseur-list.component';






const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
          {
              path: "produits",
              component: ProduitsComponent,
              children: [
                  {
                    path: "", component: ProduitListComponent
                  },
                  {
                    path: 'details/:id', component: ProduitDetailComponent
                  },
                  {
                    path: 'edit/:id', component: ProduitEditComponent
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
                  },
                  {
                    path: 'edit/:id', component: ClientEditComponent
                  }
                ]
          },
          {
              path: "fournisseurs",
              component: FournisseursComponent,
              children: [
                {
                  path: "", component: FournisseurListComponent
                },
                {
                  path: 'edit/:id', component: FournisseurEditComponent
                }
              ]
          },
          {
              path: "utilisateurs",
              component: UsersComponent,
              children: [
                  {
                    path: "", component: UserListComponent
                  },
                  {
                    path: 'detail/:id', component: UserDetailComponent
                  },
                  {
                    path: 'edit/:id', component: UserEditComponent
                  }
                ]
          },
          {
              path: "",
              redirectTo: "produits",
              pathMatch: "full"
          }
        ]
    },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
