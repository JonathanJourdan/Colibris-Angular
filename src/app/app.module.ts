import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { NavComponent } from './nav/nav.component';
import { ListeSerieComponent } from './liste-serie/liste-serie.component';
import { GestionReqComponent } from './gestion-req/gestion-req.component';
import { AppRoutingModule } from './app-routing.module';
import { Erreur404Component } from './erreur404/erreur404.component';
import { EditSerieComponent } from './edit-serie/edit-serie.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreaSerieComponent } from './crea-serie/crea-serie.component';
import { SeriesService } from './services/series.service';
import { AuthentificationService } from './services/authentification.service';
import { HttpClientModule } from '@angular/common/http';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import { CreaUserComponent } from './crea-user/crea-user.component';
import { UsersService } from './services/users.service';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    PiedPageComponent,
    NavComponent,
    ListeSerieComponent,
    GestionReqComponent,
    Erreur404Component,
    EditSerieComponent,
    ConnexionComponent,
    CreaSerieComponent,
    ListeUsersComponent,
    CreaUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SeriesService,
    AuthentificationService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }