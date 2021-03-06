import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-liste-serie',
  templateUrl: './liste-serie.component.html',
  styleUrls: ['./liste-serie.component.css']
})
export class ListeSerieComponent implements OnInit {

  titre:string;

  constructor(public lSeries:SeriesService) { 
    this.titre = "Liste des séries disponibles";
    
  }

  ngOnInit() {
  }

}
