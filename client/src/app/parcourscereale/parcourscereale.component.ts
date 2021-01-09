import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import  {Service} from '../services/services'; 
//import {Cereales } from '../models/cereales';

@Component({
  selector: 'app-parcourscereale',
  templateUrl: './parcourscereale.component.html',
  styleUrls: ['./parcourscereale.component.css']
})
export class ParcourscerealeComponent implements OnInit {
  cereales: any;

  constructor(private service: Service, private router : Router) { }

  ngOnInit(): void {
    this.service.getCereales()
    .subscribe( (data : any) => {
        this.cereales = data;
        //console.log(this.cereales);
    });
  }
  

}