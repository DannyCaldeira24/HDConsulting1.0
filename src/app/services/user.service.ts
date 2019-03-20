import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService{
	public url: string;

	constructor(
		private _http: HttpClient
	){
		this.url = GLOBAL.url;
	}

	register(user){
		let params = JSON.stringify(user);
		return this._http.post(this.url+'register',params,httpOptions);
	}
	login(user){
		let params = JSON.stringify(user);
		return this._http.post(this.url+'login',params,httpOptions);
	}
	getToken(){
		let token = JSON.parse(localStorage.getItem('token'));
		if(token != "undefined"){
			return token;
		}else{
			return null;
		}
	}
	getSession(){
		let session = JSON.parse(localStorage.getItem('session'));
		if(session != "undefined"){
			return session;
		}else{
			return null;
		}
	}

}