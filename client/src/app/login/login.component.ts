import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import  {Service} from '../services/services';  



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginbtn:boolean;
logoutbtn:boolean;
btn:boolean;


  angForm: FormGroup;
  constructor(private fb: FormBuilder, private service: Service, private router: Router) {
  //this.btn=true;
  this.angForm = this.fb.group({
  email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
  password: ['', Validators.required]
  });




  service.getLoggedInName.subscribe(name => this.changeName(name));
  if(this.service.isLoggedIn())
  {
  //console.log("loggedin");
  this.loginbtn=false;
  this.logoutbtn=true
  }
  else{
  this.loginbtn=true;
  this.logoutbtn=false
  }

  }


private changeName(name: boolean): void {
  this.logoutbtn = name;
  this.loginbtn = !name;
  }
  

  postdata(angForm1)
  { if (angForm1.value.password == "admin"){
    this.service.adminlogin(angForm1.value.email,angForm1.value.password)
    .pipe(first())
    .subscribe( 
    data => {
    const redirect = this.service.redirectUrl ? this.service.redirectUrl : '/gestionUtilisateurs';
    this.router.navigate([redirect]);
    },
    error => {
    alert("Email ou mot de passe incorrects")
    });
  } 
  if (angForm1.value.password == "controleur"){
    this.service.adminlogin(angForm1.value.email,angForm1.value.password)
    .pipe(first())
    .subscribe( 
    data => {
    const redirect = this.service.redirectUrl ? this.service.redirectUrl : '/equipment';
    this.router.navigate([redirect]);
    },
    error => {
    alert("Email ou mot de passe incorrects")
    });
  } 
  if (angForm1.value.password == "technicien"){
  this.btn=false;
    this.service.adminlogin(angForm1.value.email,angForm1.value.password)
    .pipe(first())
    .subscribe( 
    data => {
    const redirect = this.service.redirectUrl ? this.service.redirectUrl : '/equipment';
    this.router.navigate([redirect]);
    },
    error => {
    alert("Email ou mot de passe incorrects")
    });
  } 
   
  
   

  if (this.angForm.invalid) {
    return;
  }

}

  
  
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  


  ngOnInit(): void {
  }

 
}
