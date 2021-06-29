import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private service:LoginService  , private router: Router) { 

  }

  ngOnInit(): void {
  }


  Login = new FormGroup({
    name:new FormControl(),
    password:new FormControl()
  })
  alert:Boolean=false
  LoginData(){
    this.service.LoginUser().subscribe((result:any)=>{
      
      
     
      for(let logd in result){
        
        if (this.Login.value.name==result[logd].name && this.Login.value.password==result[logd].password) {
          
          this.router.navigate(['/welcome']);
  
        }
      }
      this.alert=true
      this.Login.reset()
      
    })
    
   
    
  }

  

  


}
