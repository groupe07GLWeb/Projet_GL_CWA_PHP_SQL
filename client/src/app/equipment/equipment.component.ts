import { Component, OnInit } from '@angular/core';
import  {Service} from '../services/services';
import {Equipements} from '../models/equipements';
import { isNgTemplate } from '@angular/compiler';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

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
      }
      
  	)
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

  //appeler la méthode delete comme suit: (click)= "deleteEquipement(num)" dans votre code HTML du component
  deleteEquipement(equipements:Equipements): void
  {
    this.service.deleteVariables(equipements.id).subscribe
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
