import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from '@angular/common/http';

import { catchError, tap } from 'rxjs/operators';
import {Variables} from '../models/variables';
import {Equipements} from '../models/equipements';

import { Utilisateur } from '../models/utilisateur';
import { Observable } from 'rxjs';



@Injectable({providedIn: 'root'})

export class Service
{
    redirectUrl: string;
	baseUrl:string = "http://localhost/Projet_GL_CWA_PHP_SQL/php";

	@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

	constructor(private http : HttpClient) { }
	
	public adminlogin(username, password) {
		//alert(username)
		return this.http.post<any>('http://localhost/Projet_GL_CWA_PHP_SQL/php/adminLogin.php', { username, password })
		.pipe(map(Users => {
	this.setToken(Users[0].name);
	this.getLoggedInName.emit(true);
	return Users;
	}));
	}	

	public technicienlogin(username, password) {
		//alert(username)
		return this.http.post<any>('http://localhost/Projet_GL_CWA_PHP_SQL/php/technicienLogin.php', { username, password })
		.pipe(map(Users => {
	this.setToken(Users[0].name);
	this.getLoggedInName.emit(true);
	return Users;
	}));
	}
	
	//token
	setToken(token: string) {
		localStorage.setItem('token', token);
	}
	getToken() {
		return localStorage.getItem('token');
	}
	deleteToken() {
		localStorage.removeItem('token');
	}
	isLoggedIn() {
		const usertoken = this.getToken();
	if (usertoken != null) {
		return true
	}
	return false;
	}
	


	getUtilisateurs(): Observable<any> {
		return this.http.get<any>(this.baseUrl + '/getUtilisateurs.php');
	  }
	
	  
	  createUtilisateur(user: Utilisateur): Observable<any> {
		return this.http.post<any>(this.baseUrl + '/ajoutUser.php', user);
	  }
	
	  deleteUtilisateur(id: number): Observable<any> {
		return this.http.get<any>('http://localhost/Projet_GL_CWA_PHP_SQL/php/supprimerUsr.php?id=' + id);
	  }

	  getUtilisateurId(id: number): Observable<any> {
		return this.http.get<any>(this.baseUrl + '/getUtilisateurId.php?id=' + id);
	  }

	  miseAjour(user: Utilisateur){
		return this.http.post<any>(this.baseUrl + '/modifier.php', user);
	  }


	  public usrRegistration(nom, prenom, password ,email,role ) {
		return this.http.post<any>(this.baseUrl + '/ajoutUser.php', {nom, prenom, password ,email,role}) //ajoutUser.php
		.pipe(map(Users => {
		return Users;
		}));
		}  

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
		//console.log(equipement);
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
  
	  
