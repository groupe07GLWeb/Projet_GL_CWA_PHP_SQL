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
export class EquipmentComponent implements OnInit, Operation {

  equipmentsLoaded: Promise<boolean>;
  equipements: Equipements[];
  selectedEquipement : Equipements;

  constructor(private service: Service)
  {
  }

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
        //this.updateEquipement(this.equipements[0]);
       
      }
      
  	)
  }

  getindexEquipment(e : string){

    return this.equipements.findIndex(x => x.nom_equipement == e);
  }

  //appeler la méthode update comme suit: (click)= "updateEquipement(new equipement)" dans votre code HTML du component
  updateEquipement(equipement:Equipements): void
  {
    console.log(equipement.id);
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
