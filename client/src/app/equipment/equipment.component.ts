import { Component, OnInit } from '@angular/core';
import  {Service} from '../services/services';
import {Equipements} from '../models/equipements';
import { Routes, RouterModule } from '@angular/router';
import {Operation} from '../models/operation';
import { isNgTemplate, VariableBinding } from '@angular/compiler';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
//Component for display the equipments
export class EquipmentComponent implements OnInit, Operation {

  equipmentsLoaded: Promise<boolean>; //display the page content when all the equipment is loaded locally
  equipements: Equipements[];//the equipments
  selectedEquipment : Equipements;//the equipment choose by the technician for write a report

  constructor(private service: Service)
  {
    this.selectedEquipment = null;
  }

  //loads the equipments available in the database at initialisation
  ngOnInit(): void {
    this.service.getEquipements().subscribe
  	(
  		(data: Equipements[]) =>
  		{
        this.equipements = data;
        this.equipmentsLoaded = Promise.resolve(true);
        
        let index = 3;
        for (let i = 0; i< this.equipements.length; i++){
          this.equipements[i].variable = {id : index, temperature: 0, humidite: 0.00, poussiere: 0, insecticide: 0.0};
          index++;
        }
       
      }
      
  	)
  }
  selectEquipment(e: Equipements){
    this.selectedEquipment = e;
  }

  //return the index of an equipment present in the local variable
  getindexEquipment(e : string){

    return this.equipements.findIndex(x => x.nom_equipement == e);
  }

  //update an equipment in the database
  updateEquipement(equipement:Equipements): void
  {
    this.selectedEquipment = null;
    this.service.updateEquipements(equipement).subscribe
    (
      (data) =>
      {
        this.equipements[equipement.id-1] = equipement;
      }
    )
  }

  //appeler la méthode delete comme suit: (click)= "deleteEquipement(num)" dans votre code HTML du component
  deleteEquipement(equipements:Equipements): void
  {
    this.service.deleteEquipements(equipements.id).subscribe
    (
      (data) =>
      {
        this.equipements = this.equipements.filter(u => u !== equipements); //Mettre a jour la liste des equipements local si des changement ont été affecter à la liste equipements local de la méthode!
      }
    )
  }

  reparation() : boolean{
    return true;
  }

  nettoyageEffectue() : boolean{
    return true;
  }

  ventilationEffectue() : boolean{
    return true;
  }

  desinfectationEffectue() : boolean{
    return true;
  }

}
