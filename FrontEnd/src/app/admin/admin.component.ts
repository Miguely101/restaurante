import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MessageService,Message} from 'primeng/api';
import { ApIServiceService } from '../api-service.service';
import { User } from '../models/usersModels';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [MessageService]
})
export class AdminComponent implements OnInit {

  constructor(private service:ApIServiceService, private messageService: MessageService) { }
 

  Users: User[] = [];
  perms: any[] = [];
  selectedPerm: any;
  msgs1: Message[] = [];
  restaurantes!: any[];
  selectedResc!:any
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
      })
      
      this.perms = [{label: 'Cliente', value: '1'},{label: 'Funcionario', value: '2'},{label: 'Admin', value: '3'}];
      
  }

  onRowEditSave(user: User) {
    const index = this.Users.findIndex(p => p.utilizador_id == user.utilizador_id)
    this.Users[index].perm_id =this.selectedPerm;
   
    this.service.userUpdate(user).subscribe((response) => {
        console.log(response);
    })

    setTimeout(() => {
      this.Users = []

      this.service.getUsers().subscribe((response) => {
        this.Users = this.Users.concat(response);
        console.log(response)
       })
 
    },500)

    this.msgs1 = [{severity:'success', summary:'Edição', detail:'A permissão de ' +  user.utilizador_nome + " foi atualizada"}];
}
}