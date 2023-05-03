import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service:ApIServiceService, private router: Router) { }

  ngOnInit(): void {
  }
   email = '';
   senha = '';
   error3 = '';
  
  login(){
    let user = {email: this.email, password: this.senha};
    this.service.userLogin(user).subscribe((response) => {
      this.error3 = response;
      

      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd && event.url === '/home') {
           const preloader = document.getElementById('preloader');
           if (preloader) {
            setTimeout(() => {
              preloader.style.display = 'none'; // hide the loader
           }, 1000); // wait for 1 second before hiding the loader
         }
        }
     });

      if(response.code == 200){
        localStorage.setItem('token', response.accessToken);
        this.router.navigate(['/home']);
      } 
    });
  }
}
