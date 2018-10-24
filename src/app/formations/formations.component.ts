import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Formation} from '../formation';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {
  listFormations;
  constructor(private httpClient: HttpClient) { }
  model = new Formation();
  ngOnInit() {
    this.httpClient.get('http://localhost:8090/formations')
      .subscribe(data => {
        this.listFormations = data;
      }, error => {
        console.log(error);
      }) ;
  }
  add(formation) {
    this.httpClient.post('http://localhost:8090/formations', formation)
      .subscribe(data => {
        this.ngOnInit();
      }, error => {
        console.log(error);
      }) ;
  }
  delete(id) {
    this.httpClient.delete('http://localhost:8090/formations/' + id)
      .subscribe(data => {
        this.ngOnInit();
      }, error => {
        console.log(error);
      }) ;
  }
  goBack() {
    this.ngOnInit();
  }

}
