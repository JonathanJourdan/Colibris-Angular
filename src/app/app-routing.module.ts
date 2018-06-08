import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeSerieComponent } from './liste-serie/liste-serie.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { EditSerieComponent } from './edit-serie/edit-serie.component';
import { GestionReqComponent } from './gestion-req/gestion-req.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreaSerieComponent } from './crea-serie/crea-serie.component';
import { ListeUsersComponent } from './liste-users/liste-users.component';
import { CreaUserComponent } from './crea-user/crea-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
    { path: '', component: ConnexionComponent},
    { path: 'series', component: ListeSerieComponent},
    { path: 'series/:id', component: EditSerieComponent},
    { path: 'requetes', component: GestionReqComponent},
    { path: 'creerSerie', component: CreaSerieComponent},
    { path: 'creerUser', component: CreaUserComponent},
    { path: 'users', component: ListeUsersComponent},
    { path: 'users/:id', component: EditUserComponent},
    { path: '**', component: Erreur404Component}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
