import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})
export class ListeUsersComponent implements OnInit {

  titre:string;

  constructor(public lUsers:UsersService) {
    this.titre = "Liste des Utilisateurs";
   }

  ngOnInit() {
  }

}
