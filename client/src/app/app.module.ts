import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { LayoutComponent } from './layout/layout.component';
import { ParcourscerealeComponent } from './parcourscereale/parcourscereale.component';
import { SiloComponent } from './silo/silo.component';
import { VariablesComponent } from './variables/variables.component';
import {ChartsModule} from 'ng2-charts';


import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';
import { ModifierUserComponent } from './modifier-user/modifier-user.component';
import { AddFicheEntretienComponent } from './add-fiche-entretien/add-fiche-entretien.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    EquipmentComponent,
    ParcourscerealeComponent,
    SiloComponent,
    VariablesComponent,
    AddUserComponent,
    GestionUtilisateursComponent,
    ModifierUserComponent,
    AddFicheEntretienComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule, HttpModule, HttpClientModule,  FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
