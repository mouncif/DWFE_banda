import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

// used to create fake backend
import { fakeBackendProvider } from './utilisateurs-et-droits/fake-backend';

import { JwtInterceptor} from './utilisateurs-et-droits/jwt.interceptor';
import { ErrorInterceptor } from './utilisateurs-et-droits/error.interceptor';



import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material/material.module";
import { FormsModule } from "@angular/forms";
import { MatSliderModule } from "@angular/material/slider";
import { MatSnackBarModule } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { GestionDeVentesModule } from "./gestion-de-ventes/gestion-de-ventes.module";
import { UtilisateursEtDroitsModule } from "./utilisateurs-et-droits/utilisateurs-et-droits.module";
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    MatSliderModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    GestionDeVentesModule,
    UtilisateursEtDroitsModule
  ],
  providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
