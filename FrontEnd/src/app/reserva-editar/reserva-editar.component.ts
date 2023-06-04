import { Component, Inject, OnInit } from '@angular/core';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { ApIServiceService } from '../api-service.service';
import { SocketIoService } from '../socket-io.service';

@Component({
  selector: 'app-reserva-editar',
  templateUrl: './reserva-editar.component.html',
  styleUrls: ['./reserva-editar.component.scss']
})
export class ReservaEditarComponent implements OnInit {
  selectedResc!: any;

  constructor(private socketService:SocketIoService, public ref: DynamicDialogRef, public config: DynamicDialogConfig,private service:ApIServiceService) { 
  }
  
  list1: any[] = [];

  list2: any[]= [];

  list1count:number = 1
  list2count:number = 0
  counts:number = 0;
  isDisabled = true;

  ngOnInit(): void {
    this.socketService.listenToServer("foi").subscribe((data)=>{
      console.log(data)
    })
    
    this.socketService.emitToServer("test","test");

    this.counts = this.config.data.pessoas
    this.service.getMesasById(this.config.data.selectedResc,this.config.data.ids).subscribe((response) => {
      this.list1 = response;
      this.list1count = this.list1.length * 2;
     })
    
  }

  onChange(change:any){
    this.ref.close();
  }

  send(x:any){
    this.service.setMesas(this.list2,this.config.data.ids,x).subscribe((response) => {
      console.log(this.config.data.ids)
      console.log(response)
     })
     if(x == 0){
      this.socketService.emitToServer("reserva", "aceite");
     }else{
      this.socketService.emitToServer("reserva", "cancelada");
     }

     this.ref.close();
  }
  count(){
    this.list1count = this.list1.length * 2;
    this.list2count = this.list2.length * 2;
    if(this.list2count >= this.counts){
      this.isDisabled = false
    }else{
      this.isDisabled = true
    }
  }
}
