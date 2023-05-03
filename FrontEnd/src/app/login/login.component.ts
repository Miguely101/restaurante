import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service:ApIServiceService) { }

  ngOnInit(): void {
  }
   email = '';
   senha = '';
  
  login(){
   let user ={email:this.email,password:this.senha}
   this.service.userLogin(user);
  }
}
