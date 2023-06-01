import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ApIServiceService } from '../api-service.service';
import { SocketIoService } from '../socket-io.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [MessageService],
})

export class ProfileComponent implements OnInit {

  constructor(private service:ApIServiceService,private socketService:SocketIoService,private messageService: MessageService) { }
  infoUser:any = {};
  infos:any[] =[]

  ngOnInit(): void {
    this.load()
    this.socketService.listenToServer("Lreserva-aceite").subscribe((data) => {
      this.messageService.add({severity:'success', summary: 'Reserva', detail: "A sua reserva foi aceite!"});
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
