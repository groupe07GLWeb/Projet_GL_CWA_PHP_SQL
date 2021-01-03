export class Utilisateur {
    [x: string]: any;
  public id: number;
  public nom: string;
  public prenom: string;
   public pwd:string; 
  public email:string;
  public role: string;
  
  constructor(id:number,nom: string,prenom: string,pwd:string,email:string, role: string) { 
  this.id = id;
  this.nom = nom;
  this.prenom = prenom;
  this.pwd = pwd;
  this.email = email;
  this.role = role;
  }
  }