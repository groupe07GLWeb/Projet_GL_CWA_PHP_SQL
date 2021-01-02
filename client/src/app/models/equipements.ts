import { Variable } from "@angular/compiler/src/render3/r3_ast";

export class Equipements {
public id: number;
public nom_equipements: string;
public operation: string;
public etat: number;
//public anomalies : Anomalies[];
public variable : Variable;
//public cereales : Cereales;


constructor(id:number,nom_equipements: string,operation: string,etat: number) {
this.id = id;
this.nom_equipements = nom_equipements;
this.operation = operation;
this.etat = etat;
}
}