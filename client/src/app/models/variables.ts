export class Variables {
public id: number;
public temperature: number;
public humidite: number;
public poussiere:number;
public insecticide:number;


constructor(id:number,temperature: number,humidite: number,poussiere:number,insecticide:number) {
this.id = id;
this.temperature = temperature;
this.humidite = humidite;
this.poussiere = poussiere;
this.insecticide = insecticide;
}
}
