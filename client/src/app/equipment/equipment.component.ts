import { Component, OnInit } from '@angular/core';
import  {Service} from '../services/services';
import {Equipements} from '../models/equipements';
import { Routes, RouterModule } from '@angular/router';
import {Operation} from '../models/operation';
import { isNgTemplate } from '@angular/compiler';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit, Operation {

  equipements: Equipements[];

  constructor(private service: Service)
  {
  }

  ngOnInit(): void {
    this.service.getEquipements().subscribe
  	(
  		(data: Equipements[]) =>
  		{
        this.equipements = data;
       // this.updateEquipement(this.equipements[0]);
      }
      
  	)
  }

  getindexEquipment(e : string){

    return this.equipements.findIndex(x => x.nom_equipement == e);
  }

  /*getEtatEquipement(e : string): Promise<T>{
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(this.equipements.findIndex(x => x.nom_equipements == e));
      }, 1000);
    }
    //return (this.equipements[this.getindexEquipment(e)].etat) ? this.equipements : null
  }*/

  /* getindexEquipment(e : string){
    //console.log(this.equipements.toString());
    let etatObservable = new Observable((observer) => {
      let tamer = this.equipements.findIndex(x => x.nom_equipements == e)
      observer.next(tamer);
      observer.complete();
  });
  let a;
  etatObservable.subscribe({
    next(value) { a = value; },
    complete() { console.log("C'est fini!"); }
  }) 
    return a;   
  }*/

  //appeler la méthode update comme suit: (click)= "updateEquipement(new equipement)" dans votre code HTML du component
  updateEquipement(equipement:Equipements): void
  {
    this.service.updateEquipements(equipement).subscribe
    (
      (data) =>
      {
        this.equipements[equipement.id] = equipement;
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
