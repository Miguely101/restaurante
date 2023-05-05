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
 
  items: MegaMenuItem[] = [];
  Users: User[] = [];
  perms: any[] = [];
  selectedPerm: any;
  msgs1: Message[] = [];

  ngOnInit() {
      this.items = [
          {label: 'Users', icon: 'pi pi-fw pi-users',},
          {label: 'Reservas', icon: 'pi pi-fw pi-calendar'},
          {label: 'Pedidos', icon: 'pi pi-fw pi-cog'},
          {label: 'Voltar', icon: 'pi pi-fw pi-cog'}
      ]

      this.service.getUsers().subscribe((response) => {
       this.Users = this.Users.concat(response);
      })
 
      this.perms = [{label: 'Cliente', value: '1'},{label: 'Funcionario', value: '2'},{label: 'Admin', value: '3'}]
      
  }

  onRowEditSave(user: User) {
    const index = this.Users.findIndex(p => p.utilizador_id == user.utilizador_id);
    this.Users[index].perm_id =this.selectedPerm;
   
    this.service.userUpdate(user).subscribe((response) => {
        console.log(response);
    })

    this.msgs1 = [{severity:'success', summary:'Edição', detail:'A permissão de ' +  user.utilizador_nome + " foi atualizada"}]
}
}