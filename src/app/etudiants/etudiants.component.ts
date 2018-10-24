import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Etudiant} from '../etudiant';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  listFormations;
  listEtudiants;
  currentFormation = {id:-1};
  etudiant = new Etudiant();
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    
     this.httpClient.get('http://localhost:8090/formations')
                     .subscribe(data => {
                       // this.currentFormation = data[1][0][0];
                       // console.log(this.currentFormation);
                       console.log(data);
                        this.listFormations = data;
                     }, error => {
                       console.log(error);
                     }) ;
  }
  ongetEtudiants(f) {
    this.currentFormation = f;
    this.httpClient.get('http://localhost:8090/formations/' + f.id + '/etudiants' )
      .subscribe(data => {

        this.listEtudiants = data;
      }, error => {
        console.log(error);
      }) ;
  }
  delete(id, f) {
    this.httpClient.delete('http://localhost:8090/etudiants/' + id)
      .subscribe(data => {
         this.ongetEtudiants(this.currentFormation);
      }, error => {
        console.log(error);
      }) ;
  }
  addEtudiant(etudiant) {

  }
  goBack() {
    this.ngOnInit();
  }

}
