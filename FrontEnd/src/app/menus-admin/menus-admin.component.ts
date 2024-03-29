import { Component, OnInit } from '@angular/core';
import { aW } from '@fullcalendar/core/internal-common';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ApIServiceService } from '../api-service.service';
import { PratoAdminComponent } from '../prato-admin/prato-admin.component';
import {MessageService} from 'primeng/api';
import { MeunItemsComponent } from '../meun-items/meun-items.component';
import { MenuAddComponent } from '../menu-add/menu-add.component';
import { ApagarConfirmarComponent } from '../apagar-confirmar/apagar-confirmar.component';
interface ListItem {
  prato_id: any,
  prato_nome: any,
  prato_preco:any,
}

interface ListItem2 {
 menu_id:any
}

@Component({
  selector: 'app-menus-admin',
  templateUrl: './menus-admin.component.html',
  styleUrls: ['./menus-admin.component.scss'],
  providers:[DialogService, MessageService]
})


export class MenusAdminComponent implements OnInit {

  

    list1!: ListItem[];
    list2!: ListItem2[];
    selecteds!: any[];
    selecteds2!: any[];
    ref!: DynamicDialogRef;
    valor!: any;

  constructor(private service:ApIServiceService,public dialogService: DialogService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.load()
  }

  startChange(prato:any){
    this.valor = prato.prato_preco
  }

  saveChange(prato:any){
    var prato2 = {prato_nome:prato.prato_nome,prato_id:prato.prato_id,prato_preco:this.valor} 
    console.log(prato);
    this.service.editPrato(prato2).subscribe((response) => {
      console.log(response)
     })
    this.messageService.add({severity:'success', summary: 'Editado', detail: "Item " +  prato.prato_nome + " Editado."});
    const index = this.list1.findIndex(p => p.prato_id == prato.prato_id);
    this.list1[index].prato_preco =this.valor;
  }
  show() {
    this.ref = this.dialogService.open(PratoAdminComponent, {
        header: 'Prato',
        width: '55%',
        contentStyle: {"max-height": "500px", "overflow": "auto","min-height": "200px"},
        baseZIndex: 10000
    });

    this.ref.onClose.subscribe((data:any) => {
     this.load()
     if(data == true){
      this.messageService.add({severity:'success', summary: 'Adicionado', detail: " + Item adicionado"});
     }
     
    });
}

show2(id:any) {
  this.ref = this.dialogService.open(MeunItemsComponent, {
      header: 'Editar Menu',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto","min-height": "200px"},
      baseZIndex: 10000,
      data: {
        ids: id,
      }
      
  });

  this.ref.onClose.subscribe((data) => {
   if(data == true){
    this.load()
    this.messageService.add({severity:'success', summary: 'Editado', detail: " + Menu Editado"});
   } 
  });
}

show3() {
  this.ref = this.dialogService.open(MenuAddComponent, {
      header: 'Criar Menu',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto","min-height": "200px"},
      baseZIndex: 10000,
  });

  this.ref.onClose.subscribe((data) => {
   if(data == true){
    this.messageService.add({severity:'success', summary: 'Adicionado', detail: " + Menu adicionado"});
    this.load()
   }
  });
}

load(){
  this.list1= [];
  this.list2 =[];

  this.service.getAllPratos().subscribe((response) => {
    this.list1 = this.list1 =(response);
    console.log(response)
   })

   this.service.getAllMenus().subscribe((response) => {
    this.list2 = this.list2 =(response);
    console.log(response)
   })
}

async delete(){
  this.ref = this.dialogService.open(ApagarConfirmarComponent, {
    header: 'Apagar?', 
    width: '20%',
    height:'10px',
    contentStyle: {"max-height": "500px", "overflow": "auto","min-height": "85px"},
    baseZIndex: 10000,  
});
this.ref.onClose.subscribe((data:any) => {
  if(data == true){
    const pratos = this.selecteds.map((obj: { prato_id: any; }) => obj.prato_id);
    this.service.deletePratos(pratos).subscribe((response) => {
      console.log(response)
     })
     this.messageService.add({severity:'warn', summary: 'Apagado', detail: this.selecteds.length + " - Itens apagados."});
    this.list1 = this.list1.filter((obj: { prato_id: any }) => !pratos.includes(obj.prato_id));
    this.selecteds = [];
  }
});
}

async delete2(){
  this.ref = this.dialogService.open(ApagarConfirmarComponent, {
    header: 'Apagar?', 
    width: '20%',
    height:'10px',
    contentStyle: {"max-height": "500px", "overflow": "auto","min-height": "85px"},
    baseZIndex: 10000,  
});
this.ref.onClose.subscribe((data:any) => {
  if(data == true){
    const menus = this.selecteds2.map((obj: {menu_id: any; }) => obj.menu_id);
    this.service.deleteMenu(menus).subscribe((response) => {
      console.log(response)
     })
     this.messageService.add({severity:'warn', summary: 'Apagado', detail: this.selecteds2.length + " - Menu apagados."});
     this.list2 = this.list2.filter((obj: { menu_id: any }) => !menus.includes(obj.menu_id));
     this.selecteds2 = [];
  }
});
}

}
