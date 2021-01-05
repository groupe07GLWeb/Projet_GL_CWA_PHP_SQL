import { Variable } from "@angular/compiler/src/render3/r3_ast";
import { Variables } from "./variables";

export class Equipements {
public id: number;
public nom_equipement: string;
public operation: string;
public etat: number;
//public anomalies : Anomalies[];
public variable : Variables;
//public cereales : Cereales;


constructor(id:number,nom_equipement: string,operation: string,etat: number) {
this.id = id;
this.nom_equipement = nom_equipement;
this.operation = operation;
this.etat = etat;
}
}