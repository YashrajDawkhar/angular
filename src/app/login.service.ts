import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) { }

  url ="https://jsonplaceholder.typicode.com/posts"

  getList(){
    return this.http.get(this.url);
  }



}
