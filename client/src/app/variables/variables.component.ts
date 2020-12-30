import { Component, OnInit } from '@angular/core';
import  {Service} from '../services/services';
import  {Variables} from '../models/variables';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css'],
})
export class VariablesComponent implements OnInit {
 
 //Variables for the chart!
 public barChartOptions = {scaleShowVerticalLines: false,responsive: true};
 public barChartLabels = [];
 public barChartType = 'bar';
 public barChartLegend = true;
 public barChartData =[];
/*
  [
{data: [63, 55,42,43], label: 'Series A'},
{data: [63, 52,72,23], label: 'Series B'},
{data: [61, 55,42,83], label: 'Series C'},
{data: [63, 65,54,49], label: 'Series D'}
 ];
*/
//local Variables 
variables: Variables[];

  constructor(private service: Service)
   {
   }

//appeler la méthode delete comme suit: (click)= "deleteVariable(num)" dans votre code HTML du component
   deleteVariable(variables:Variables): void
   {
     this.service.deleteVariables(variables.id).subscribe
     (
       (data) =>
       {
         this.variables = this.variables.filter(u => u !== variables); //Mettre a jour la liste des variables local si des changement on était affecé à la liste variables local de la méthode!
       }
     )
   }
   
  ngOnInit(): void
  {
  	this.service.getVariables().subscribe
  	(
  		(data: Variables[]) =>
  		{
        this.variables = data;
  		for (let i in this.variables)
       {
         //for the data
          this.barChartData[i]= {data:[this.variables[i].temperature,this.variables[i].humidite,
          this.variables[i].poussiere,this.variables[i].insecticide], label: ''+ this.variables[i].id};
          //for the barChartLabels
          this.barChartLabels[i] = ''+this.variables[i].id; 
        }
  		}
  	)
  }

}
