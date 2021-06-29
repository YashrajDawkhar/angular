import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) { }

  url ="http://localhost:3000/users"

  
  LoginUser(){
    return this.http.get(this.url)
  }



}
