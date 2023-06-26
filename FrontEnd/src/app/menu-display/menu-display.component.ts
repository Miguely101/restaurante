import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { MenuItemsClienteComponent } from '../menu-items-cliente/menu-items-cliente.component';

@Component({
  selector: 'app-menu-display',
  templateUrl: './menu-display.component.html',
  styleUrls: ['./menu-display.component.scss'],
  providers:[DialogService, MessageService]
})
export class MenuDisplayComponent implements OnInit {

  constructor(private service:ApIServiceService,public dialogService: DialogService,private messageService: MessageService) { }
  menus!: any[];
  ref!: DynamicDialogRef;
  ngOnInit(): void {
    this.service.getAllMenus().subscribe((response) => {
      this.menus =(response);
      console.log(response)
     })
  }
show2(id:any) {
  this.ref = this.dialogService.open(MenuItemsClienteComponent, {
      header: 'Editar Menu',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto","min-height": "200px"},
      baseZIndex: 10000,
      data: {
        ids: id,
      }
      
  });
}
}