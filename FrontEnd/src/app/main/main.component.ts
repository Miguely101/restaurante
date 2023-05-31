import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import { BookTableComponent } from '../book-table/book-table.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers:[DialogService]
})
export class MainComponent implements OnInit {

  constructor(private service:ApIServiceService,public dialogService: DialogService,) { }

  username = "Null"
  perms = 0
  ref!: DynamicDialogRef;

  ngOnInit(): void {
    this.service.getUserData().subscribe((response) => {
      this.username = response.nome;
      this.perms = response.perm;
    })
  }

    show() {
      this.ref = this.dialogService.open(BookTableComponent, {
          header: 'Reserva',
          width: '70%',
          contentStyle: {"max-height": "500px", "overflow": "auto","min-height": "500px"},
          baseZIndex: 10000
      });
  }

  ngOnDestroy() {
      if (this.ref) {
          this.ref.close();
      }
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
