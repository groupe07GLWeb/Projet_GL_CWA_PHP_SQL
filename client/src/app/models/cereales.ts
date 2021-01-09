export class Cereales {
    public id: Number;
    public type: string;
    public poids: Number;
    public date_arrivage: Date;
    public date_expedition:Date;
    public num_cellule:Number;
    public qualite:string;
    
    
    constructor(id:number,type:string, poids: number,date_arrivage:Date,date_expedition:Date,num_cellule:Number,qualite:string) {
    this.id = id;
    this.type = type;
    this.poids = poids;
    this.date_arrivage = date_arrivage;
    this.date_expedition = date_expedition;
    this.num_cellule = num_cellule;
    this.qualite = qualite;
    }
    }