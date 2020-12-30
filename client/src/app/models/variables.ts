export class Variables {
public id: Number;
public temperature: Number;
public humidite: Number;
public poussiere:Number;
public insecticide:Number;


constructor(id:number,temperature: Number,humidite: Number,poussiere:Number,insecticide:Number) {
this.id = id;
this.temperature = temperature;
this.humidite = humidite;
this.poussiere = poussiere;
this.insecticide = insecticide;
}
}