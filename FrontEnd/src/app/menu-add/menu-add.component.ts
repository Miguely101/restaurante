import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ApIServiceService } from '../api-service.service';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.scss']
})
export class MenuAddComponent implements OnInit {
  menu_nomes!:any;
  valor!:any;
  list1: any[] = []
  list2: any[] = []
  constructor(private service:ApIServiceService,public ref: DynamicDialogRef) { }

  ngOnInit(): void {
    this.load()
  }

  send(){
    const ids: number[] = this.list2.map(item => item.prato_id);
     var body = {menu_nome: this.menu_nomes,menu_preco: this.valor,ids: ids}
    this.service.makeMenu(body).subscribe((response) => {
      this.list1 = response;
    });
    this.ref.close(true);
  }


  load(){
    this.list1= [];
     this.service.getAllPratos().subscribe((response) => {
      this.list1 = response;

    });
  }
}
