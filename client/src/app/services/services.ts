import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
=======
import { catchError, tap } from 'rxjs/operators';
>>>>>>> 94372b3dfa20cb8579f30c3ac378e49f0cbd97e7
import {Variables} from '../models/variables';


@Injectable({providedIn: 'root'})

export class Service
{

	constructor(private http : HttpClient) { }

	getVariables()
	{
		return this.http.get<Variables[]>('http://localhost/TestPHP/php/getVariables.php');
	}

	deleteVariables(id: Number)
	{
		return this.http.delete<Variables[]>('http://localhost/TestPHP/php/sqlDelete.php?id='+id);
	}
}
  
	  