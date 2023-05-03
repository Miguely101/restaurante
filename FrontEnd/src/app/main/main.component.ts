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


  ngOnInit(): void {
    this.service.getUserData().subscribe((response) => {
      this.username = response.nome;
    })
  }



  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

}
