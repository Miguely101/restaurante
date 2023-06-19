import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ApIServiceService } from '../api-service.service';
import { SocketIoService } from '../socket-io.service';
import { dA } from '@fullcalendar/core/internal-common';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EncomendaInfoComponent } from '../encomenda-info/encomenda-info.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [DialogService,MessageService],
})

export class ProfileComponent implements OnInit {

  constructor(private service:ApIServiceService,private socketService:SocketIoService,private messageService: MessageService,public dialogService: DialogService) { }
  infoUser:any = {};
  infos:any[] =[]
  ref!: DynamicDialogRef;
  
  show(x:any){
      this.ref = this.dialogService.open(EncomendaInfoComponent, {
        header: 'Itens Encomenda',
        width: '55%',
        contentStyle: {"max-height": "500px", "overflow": "auto","min-height": "200px"},
        baseZIndex: 10000,
        data: {
          ids: x,
        }
    });

  }

  ngOnInit(): void {
    this.load()
    this.socketService.listenToServer("Lreserva-aceite").subscribe((data) => {
      this.messageService.add({severity:'success', summary: 'Reserva', detail: "A sua reserva foi aceite!"});
      setTimeout(() => {
        this.load();
       }, 1000); 
      console.log(data);
    });

    this.socketService.listenToServer("Lencomenda").subscribe((data) => {
      this.messageService.add({severity:'success', summary: 'encomenda', detail: "" +  data});
      setTimeout(() => {
        this.load();
       }, 1000); 
      console.log(data);
    });
  }
  load(){
    this.infoUser = [];
    this.infos = [];
    this.service.getUserData().subscribe((response) => {
      this.infoUser = response;
    })
    this.service.getInfos().subscribe((response) => {
      console.log(response)
      this.infos = response;
    })
  }
}
