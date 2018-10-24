import { Component, OnInit } from '@angular/core';
import {Etudiant} from '../etudiant';
import {HttpClient} from '@angular/common/http';
import {DatePipe, formatDate} from '@angular/common';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
  etudiant = new Etudiant();
  listFormations;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('http://localhost:8090/formations?projection=p1')
      .subscribe(data => {
        this.etudiant = new Etudiant();
        this.listFormations = data;

      }, error => {

      }) ;
  }
  add(etudiant) {


    this.etudiant.dateNaissance = new Date();
    this.etudiant.formation = 'http://localhost:8090/formations/' + etudiant.idFormation;
    console.log(this.etudiant.formation);
    this.httpClient.post('http://localhost:8090/etudiants', this.etudiant)
      .subscribe(data => {
        this.ngOnInit();
        console.log(data);
      }, error => {
        console.log('no insserer');
      }) ;

  }
  goBack() {
    this.ngOnInit();
  }
}
