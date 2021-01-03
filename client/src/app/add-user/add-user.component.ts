import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {Service} from '../services/services';  //import { ApiService } from '../api.service';
import { Utilisateur } from '../models/utilisateur';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  
  constructor(private fb: FormBuilder,private service: Service,private router:Router) {
 /* this.angForm = this.fb.group({

  nom: ['', [Validators.required,Validators.minLength(1)]],
  prenom: ['', Validators.required],
  password: ['', Validators.required],
  email: ['', Validators.required],
  role: ['', Validators.required]
  });*/
  }
  addForm: FormGroup;
  token: any;
  ngOnInit() {
   this.token =  window.localStorage.getItem('token');
   console.log(this.token);
   if(!this.token){
      this.router.navigate(['login']);
   }
   this.addForm = this.fb.group({
      id: [],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required]
    });

  }

  onSubmit() {
    // more code will come here
    console.log(this.addForm.value);

    this.service.createUtilisateur(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['gestionUtilisateurs']);
      });
  }

 

  /*postdata(angForm1)
  {
  this.service.usrRegistration(angForm1.value.nom, angForm1.value.prenom, angForm1.value.password, angForm1.value.email,angForm1.value.role)
  .pipe(first())
  .subscribe(
  data => {
  this.router.navigate(['/gestionUtilisateurs']);
  },
  
  error => {
  });
  }


  get nom() { return this.angForm.get('nom'); }
  get prenom() { return this.angForm.get('prenom'); }
  get password() { return this.angForm.get('password'); }
  get role() { return this.angForm.get('role'); }
  get email() { return this.angForm.get('email'); }
*/
  logOut(){
    window.localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
