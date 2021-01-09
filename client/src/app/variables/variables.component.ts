import { Component, OnInit } from '@angular/core';
import  {Service} from '../services/services';
import  {Variables} from '../models/variables';
import {Chart} from 'node_modules/chart.js'
@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css'],
})

export class VariablesComponent implements OnInit {
 
 //Variables for the chart!
 
 public barChartLabels = [];

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
   
  ngOnInit(): void
  { 
        var labels= [];
         var temp = [];
        var pouss = [];
        var hum = [] ;
        var insec = [];
  	this.service.getVariables().subscribe
  	(
  		(data: Variables[]) =>
  		{
        this.variables = data;
         
  		for (let i in this.variables)
       {
         //for the data
  
          temp[i]= this.variables[i].temperature;
           pouss[i] = this.variables[i].poussiere;
          hum[i] = this.variables[i].humidite;
          insec[i] = this.variables[i].insecticide;
          //for the barChartLabels
          labels[i] = 'Silo numéro: '+this.variables[i].id; 

        }

//Chart température
       var myChart = new Chart("TempChart", {
    type: 'bar',
    data: {
        labels,
        datasets: [{
            label: 'Température par silo',
            data: [temp[0] , temp[1],temp[2] ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
          }
    }
});


        //Chart Poussière
         var myChart2 = new Chart("PoussChart", {
    type: 'bar',
    data: {
        labels,
        datasets: [{
            label: 'Poussière par silo',
           data: [pouss[0], pouss[1],pouss[2] ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
                
            ],
            borderColor: ['rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
            
            
          }
    }
});
         
//Chart Humidité
  var myChart3 = new Chart("HumChart", {
    type: 'bar',
    data: {
        labels,
        datasets: [{
            label: 'Humidité par silo',
             data: [hum[0], hum[1],hum[2] ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                
                'rgba(255, 206, 86, 0.2)',
              'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
               
            }]

        },
        legend: {
            display: false
           
            
          }
    }
});
//Chart Insecticides
  var myChart4 = new Chart("InsecChart", {
    type: 'bar',
    data: {
        labels,
        datasets: [{
            label: ['Insecticides silo 1'],
            data: [insec[0], insec[1],insec[2] ],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
               
            }]

        },
        legend: {
            display: false
            
            
          }
    }
});
  		}
  	)


  }

}

