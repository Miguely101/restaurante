import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MessageService,Message} from 'primeng/api';
import { ApIServiceService } from '../api-service.service';
import { User } from '../models/usersModels';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ApagarConfirmarComponent } from '../apagar-confirmar/apagar-confirmar.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [MessageService,DialogService]  
})
export class AdminComponent implements OnInit {

  constructor(private service:ApIServiceService, private messageService: MessageService, public dialogService: DialogService) { }
 

  Users: User[] = [];
  perms: any[] = [];
  selectedPerm: any;
  msgs1: Message[] = [];
  restaurantes!: any[];
  selectedResc!:any
  ref!: DynamicDialogRef;
  
  show(x:any){
    this.ref = this.dialogService.open(ApagarConfirmarComponent, {
      header: 'Apagar?', 
      width: '20%',
      height:'10px',
      contentStyle: {"max-height": "500px", "overflow": "auto","min-height": "85px"},
      baseZIndex: 10000,  
  });
  this.ref.onClose.subscribe((data:any) => {
    if(data == true){
      this.service.deleteUser(x).subscribe((response) => {
        console.log(response);
        this.Users = []
        this.service.getUsers().subscribe((response) => {
          this.Users = this.Users.concat(response);
         })
      })
     this.messageService.add({severity:'warn', summary: 'Utilizador', detail: " o id " + x + " foi apagado!"});
    }else{
      
    }
  });
  } 

  ngOnInit() {

    this.service.getRestaurantes().subscribe((response) => {
      this.restaurantes = response.map((item) => {
        return {
          label: item.restaurante_morada + "-" + item.restaurante_localidade,
          value: item.restaurante_id,
          latitude: item.latitude,
          longitude: item.longitude,
        };
      });
    });

      this.service.getUsers().subscribe((response) => {

       this.Users = this.Users.concat(response);
       console.log(this.Users)
      })
      
      this.perms = [{label: 'Cliente', value: '1'},{label: 'Funcionario', value: '2'},{label: 'Admin', value: '3'}];
      
  }

  onRowEditSave(user: User) {
    const index = this.Users.findIndex(p => p.utilizador_id == user.utilizador_id)
    this.Users[index].perm_id =this.selectedPerm;
   
    this.service.userUpdate(user).subscribe((response) => {
    })

    setTimeout(() => {
      this.Users = []

      this.service.getUsers().subscribe((response) => {
        this.Users = this.Users.concat(response);
       })
 
    },500)
    this.messageService.add({severity:'success', summary: 'Permissão', detail: "permissão alterada com sucesso"});
    
}
}