import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router, Params, ActivatedRoute} from '@angular/router';
import  {Service} from '../services/services'; 
import { Utilisateur } from '../models/utilisateur';

@Component({
  selector: 'app-modifier-user',
  templateUrl: './modifier-user.component.html',
  styleUrls: ['./modifier-user.component.css']
})
export class ModifierUserComponent implements OnInit {

 
  constructor(private fb: FormBuilder,
    private service: Service,
    private router : Router,
    private routes : ActivatedRoute
) { }

addForm: FormGroup;

ngOnInit() {

const routeParams = this.routes.snapshot.params;
console.log(routeParams.id);


this.addForm = this.fb.group({
  id: [],
  nom: ['', Validators.required],
  prenom: ['', Validators.required],
  password: ['', Validators.required],
  email: ['', Validators.required],
  role: ['', Validators.required]
});

this.service.getUtilisateurId(routeParams.id).subscribe((data: any) => {
// console.log(data)
this.addForm.patchValue(data);
});

}

usrModifie(){
// console.log(this.addForm.value)
// console.log(this.addForm.value);
this.service.miseAjour(this.addForm.value).subscribe(() => {
this.router.navigate(['gestionUtilisateurs']);
},
error => {
alert(error);
});
}
}
