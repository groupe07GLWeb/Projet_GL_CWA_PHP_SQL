import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import  {Service} from '../services/services';  //import { ApiService } from '../api.service';
import {Utilisateur} from '../models/utilisateur';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  logoutbtn:boolean;
  usr: Utilisateur;
btn:boolean;

  constructor(private service: Service, private router: Router) {

    this.btn=true;    
   }

  ngOnInit(): void {

    this.service.getUtilisateurs()
    .subscribe( (data : any) => {
        this.usr = data;
      //  console.log(this.usr);
    });

  }
logout()
{
this.service.deleteToken();
window.location.href = window.location.href;

const redirect = this.service.redirectUrl ? this.service.redirectUrl : '/login';
  this.router.navigate([redirect]);
}

}
