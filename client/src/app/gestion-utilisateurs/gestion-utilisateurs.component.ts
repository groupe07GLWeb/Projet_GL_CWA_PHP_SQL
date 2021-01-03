import { Component, OnInit } from '@angular/core';


import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import  {Service} from '../services/services'; 
import { Utilisateur } from '../models/utilisateur';

@Component({
  selector: 'app-gestion-utilisateurs',
  templateUrl: './gestion-utilisateurs.component.html',
  styleUrls: ['./gestion-utilisateurs.component.css']
})
export class GestionUtilisateursComponent implements OnInit {
  users: any; //Utilisateur
  
  constructor( private service: Service,
    private router : Router) { }

  ngOnInit(){

    this.service.getUtilisateurs()
    .subscribe( (data : any) => {
        this.users = data;
        console.log(this.users);
    });

  }


  deleteUtilisateur(user :Utilisateur): void
  {
    this.service.deleteUtilisateur(user.id).subscribe
    (
      (data) =>
      {
        this.users = this.users.filter(u => u !== user); 
      }
    )
  }


  edit(user: Utilisateur): void {
    this.router.navigate(['modifierUser/' + user.id]);
  }

}