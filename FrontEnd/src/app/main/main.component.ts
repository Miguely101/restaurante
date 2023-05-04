import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private service:ApIServiceService) { }

  username = "Null"
  perms = 0


  ngOnInit(): void {
    this.service.getUserData().subscribe((response) => {
      this.username = response.nome;
      this.perms = response.perm;
    })
  }

  admincheck(): boolean{
    if(this.perms === 3) {return true}else{return false;}
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

}
