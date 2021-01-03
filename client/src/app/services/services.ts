import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';
import {Variables} from '../models/variables';
import {Equipements} from '../models/equipements';


@Injectable({providedIn: 'root'})

export class Service
{

	constructor(private http : HttpClient) { }

	getVariables()
	{
		return this.http.get<Variables[]>('http://localhost/Projet_GL_CWA_PHP_SQL/php/getVariables.php');
	}
//A tester
	deleteVariables(id: Number)
	{
		return this.http.delete<Variables[]>('http://localhost/Projet_GL_CWA_PHP_SQL/php/sqlDelete.php?id='+id);
	}

	getEquipements()
	{
		return this.http.get<Equipements[]>('http://localhost/Projet_GL_CWA_PHP_SQL/php/getEquipements.php');
	}

	updateEquipements(equipement: Equipements)
	{
		
		const headers = new HttpHeaders()
    	.set("Content-Type", "application/json");

		return this.http.put<Equipements>('http://localhost/Projet_GL_CWA_PHP_SQL/php/updateEquipements.php',
		{
			"id": equipement.id.toString(),
			"nom": equipement.nom_equipement.toString(),
			"op": equipement.operation.toString(),
			"etat": equipement.etat.toString()
		}, 
		{headers: headers});
	}

	deleteEquipements(id: number)
	{
		return this.http.delete<Equipements[]>('http://localhost/Projet_GL_CWA_PHP_SQL/php/sqlDelete.php?id='+id);
	}
}
  
	  
