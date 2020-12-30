export class Utilisateur {
public id: number;
public nom: string;
public prenom: string;
public mdp:string;
public email:string;
public role: string;

constructor(id:number,nom: string,prenom: string,mdp:string,email:string, role: string) {
this.id = id;
this.nom = nom;
this.prenom = prenom;
this.mdp = mdp;
this.email = email;
this.role = role;
}
}