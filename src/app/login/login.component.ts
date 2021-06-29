import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {LoginService} from '../login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  collection:any=[];

  constructor(private service:LoginService) { 

    this.service.getList().subscribe(
      (result)=>{
        console.log(result)
      }
    )
  }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username:new FormControl(''),
    password :new FormControl('')
  })

  collectData(){
    console.log(this.loginForm.value);
  }


  

  


}
