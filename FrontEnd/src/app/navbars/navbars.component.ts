import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.scss']
})
export class NavbarsComponent implements OnInit {
  username = "Null"
  perms = 0
  constructor(private service:ApIServiceService) { }

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
