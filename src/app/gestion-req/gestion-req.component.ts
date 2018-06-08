import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-req',
  templateUrl: './gestion-req.component.html',
  styleUrls: ['./gestion-req.component.css']
})
export class GestionReqComponent implements OnInit {
  req:object;
  titre:string;
  listeReq:Array<object>;

  constructor() { 
    this.titre = "Liste des requêtes";
    this.req = {
      "title": "L'avare",
      "author": "Molière",
      "publisher": 0,
      "collection": 0,
      "language": "Français",
      "publishedDate": "2016-04-13T12:00:00Z",
      "pages": 144,
      "cover": "https://images-na.ssl-images-amazon.com/images/I/51JW7IBS-YL._SX345_BO1,204,203,200_.jpg",
      "ISBN10": 2013949677,
      "ISBN13": 9782013949675
    }
    this.listeReq=[this.req, this.req]
  }

  ngOnInit() {
  }

}
