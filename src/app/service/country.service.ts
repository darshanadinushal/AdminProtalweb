import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Country{
    id: number;
    code: string;
    name: string;
    state: State[]
}

export interface State{
    id: number;
    code: string;
    name: string;
}

export interface User{
  id: number;
  email: string;
  password: string;
  phone: string;
  countryName :string;
  stateName:string ;
}

const url ='http://localhost:52906/api/';
const headers =new HttpHeaders();

@Injectable({
    providedIn: 'root'
})
export class CountryService {

  

  constructor(private httpClient: HttpClient){}
  
  getCountryList(): Observable<any>{

    return this.httpClient.get("./assets/data.json");
  }

  saveUser(user : User): Observable<any>{

    return this.httpClient.post(url+"User" , user , {headers});
  }



}