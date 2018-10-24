import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FormationsComponent } from './formations/formations.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import {RouterModule, Routes} from '@angular/router';


const  routes: Routes = [

  {path: 'formation', component: FormationsComponent},
  {path: 'etudiant', component: AddEtudiantComponent},
  {path: 'etudiantsParFr', component: EtudiantsComponent},
  {path: '', redirectTo: '/etudiantsParFr', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    FormationsComponent,
    AddEtudiantComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
