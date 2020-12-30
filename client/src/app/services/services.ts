import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';
import {Variables} from '../models/variables';


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
}
  
	  
