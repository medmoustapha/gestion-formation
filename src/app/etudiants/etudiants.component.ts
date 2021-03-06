import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Etudiant} from '../etudiant';
import {EtudiantEdit} from '../etudaintEdit';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  listFormations;
  listEtudiants;
  currentFormation = -1;
  etudiant = new EtudiantEdit();
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

     this.httpClient.get('http://localhost:8090/formations')
                     .subscribe(data => {
                        // this.currentFormation = data[1][0][0].id;
                        console.log(this.currentFormation);
                       console.log(data);
                        this.listFormations = data;
                        this.ongetEtudiants(1);
                     }, error => {
                       console.log(error);
                     }) ;
  }
  ongetEtudiants(f) {
    this.currentFormation = f;
    this.httpClient.get('http://localhost:8090/formations/' + f+ '/etudiants' )
      .subscribe(data => {
       this.etudiant=new EtudiantEdit();
        this.listEtudiants = data;
      }, error => {
        console.log(error);
      }) ;
  }
  edite(id) {
    this.httpClient.get('http://localhost:8090/etudiants/' + id + '?projection=p1')
      .subscribe(data => {


        // @ts-ignore
        this.etudiant =  data;
        console.log(this.etudiant);
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

    const formationadd: string = 'http://localhost:8090/formations/' + etudiant.formation;
    if (etudiant.id != null) {
     this.httpClient.patch('http://localhost:8090/etudiants/' + etudiant.id, {'nom': etudiant.nom, 'prenom': etudiant.prenom,
                         'dateNaissance': etudiant.dateNaissance, 'formation': formationadd})
      .subscribe(data => {
        this.etudiant = new EtudiantEdit();
        this.ongetEtudiants(this.currentFormation);
      }, error => {
        console.log(error);
      }) ;
    } else {
      this.httpClient.post('http://localhost:8090/etudiants', {'nom': etudiant.nom,
               'prenom': etudiant.prenom, 'dateNaissance': etudiant.dateNaissance, 'formation': formationadd})
        .subscribe(data => {
          this.etudiant = new EtudiantEdit();
          this.ongetEtudiants(this.currentFormation);
        }, error => {
          console.log(error);
        }) ;
    }
  }
  goBack() {
    this.ongetEtudiants(this.currentFormation);
  }

}
