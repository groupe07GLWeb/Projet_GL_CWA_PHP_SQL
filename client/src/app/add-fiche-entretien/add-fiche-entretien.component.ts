import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Equipements} from '../models/equipements';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import  {Service} from '../services/services'; 

@Component({
  selector: 'app-add-fiche-entretien',
  templateUrl: './add-fiche-entretien.component.html',
  styleUrls: ['./add-fiche-entretien.component.css']
})

//Component allowing to send a rapport (for the technician)
export class AddFicheEntretienComponent implements OnInit {
  @Input() equipmentChoisi: Equipements;//the equipment choose by the user
  @Output() update: EventEmitter<any> = new EventEmitter();//call the updateEquipment method of the parent at submitting
  checkoutForm : FormGroup;

  constructor(private formBuilder : FormBuilder, private service: Service, private router: Router) {
    this.checkoutForm = this.formBuilder.group({
      dateIntervention: ['', Validators.required],
      description: ['', [Validators.required,Validators.minLength(1)]],
      operation: ['', [Validators.required,Validators.minLength(1)]],
      gridRadios: ['', Validators.required]
    });
    
   }

  ngOnInit(): void {
  }

  //Return a local date
  getDateTimeLocal() : Date{
    let datel = new Date();
    formatDate(datel,"yyyy-MM-ddThh:mm","en-US");
  return datel;
  }

  //submit the form and update the equipment table in the database if an damaged equipment is repaired
  onSubmit(data){
    if(data.gridRadios == "oui" && this.equipmentChoisi.etat != 1){
      this.equipmentChoisi.etat = 1;
      this.update.emit(this.equipmentChoisi);
    }
    console.log("FicheEntretien form submitted");
    this.router.navigate(['/equipment']);//refresh the equipment page
  }

}
