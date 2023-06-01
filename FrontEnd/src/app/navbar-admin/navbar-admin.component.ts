import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.scss']
})
export class NavbarAdminComponent implements OnInit {

  constructor(private router: Router) { }
  items: MegaMenuItem[] = [];
  
  ngOnInit(): void {
    this.items = [
      {label: 'Users', icon: 'pi pi-fw pi-users',command: () => this.changePageUsers(),},
      {label: 'Reservas', icon: 'pi pi-fw pi-calendar',command: () => this.changePageReservas()},
      {label: 'Menus', icon: 'pi pi-fw pi-cog',command: () => this.changePageMenu()},
      {label: 'Encomendas', icon: 'pi pi-fw pi-cog',command:()=> this.changePageEncomendas()},
      {label: 'Voltar', icon: 'pi pi-fw pi-cog',command: () => this.changePageVoltar()}
  ]
  }

  changePageUsers(){
    this.router.navigate(['/admin/users']);
  }
  
  changePageReservas(){
    this.router.navigate(['/admin/reservas']);
  }

  changePageEncomendas(){
    this.router.navigate(['/admin/encomendas']);
  }

  changePageVoltar(){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url === '/home') {
         const preloader = document.getElementById('preloader');
         if (preloader) {
          setTimeout(() => {
            preloader.style.display = 'none'; // hide the loader
         }, 500); // wait for 1 second before hiding the loader
       }
      }
   });
    this.router.navigate(['/home']);
  }

  changePageMenu(){
    this.router.navigate(['/admin/menus']);
  }

}
