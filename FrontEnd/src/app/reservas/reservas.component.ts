import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { ApIServiceService } from '../api-service.service';
import { DatePipe } from '@angular/common';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReservaEditarComponent } from '../reserva-editar/reserva-editar.component';
import { ThisReceiver } from '@angular/compiler';
import { SocketIoService } from '../socket-io.service';

interface Reserva {
  reserva_id: number;
  restaurante_id: number;
  utilizador_id: number;
  reserva_data: string;
  reserva_hora: number;
  reservas_estado: string;
}

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  providers: [DatePipe,DialogService],
  styleUrls: ['./reservas.component.scss']
  
})
export class ReservasComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin,timeGridPlugin],

                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridDay'
                },
                editable: false,
                selectable:false,
                selectMirror: false,
                dayMaxEvents: false,
  };
  events: { title: string, date: string }[] = [];
  reservas!:[];
  restaurantes!: any[];
  selectedResc:any = 1;
  number = 1;
  ref!: DynamicDialogRef;
 
  constructor(private socketService:SocketIoService,private service:ApIServiceService ,private datePipe: DatePipe,public dialogService: DialogService) { }


  ngOnInit(): void {
    this.socketService.listenToServer("foi").subscribe((data)=>{
      console.log(data)
    })
    
    this.socketService.emitToServer("test","test");

    this.service.getReservasById(this.number).subscribe((response) => {
      this.reservas = response.filter((item: Reserva) => item.reservas_estado === 'Pendente');
  
  
      response.forEach((item: Reserva) => {
        if (item.reservas_estado === 'Aceite') {
          const date = new Date(item.reserva_data);
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          const hour = String(item.reserva_hora).padStart(2, '0');
  
          const event = {
            title: `Reserva ${item.reserva_id}`,
            date: `${year}-${month}-${day}T${hour}:00`,
          };
          this.events.push(event);
        }
      });
  
      // Update the calendar options with the updated events array
      this.calendarOptions = { ...this.calendarOptions, ...{ events: this.events } };
    });


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

  }

  changeLoc() {
    this.service.getReservasById(this.selectedResc).subscribe((response) => {
      this.reservas = [];
      this.reservas = response.filter((item: Reserva) => item.reservas_estado === 'Pendente');
  
      // Clear the events array before populating it with new events
      this.events = [];


      response.forEach((item: Reserva) => {
        if (item.reservas_estado === 'Aceite') {
          const date = new Date(item.reserva_data);
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          const hour = String(item.reserva_hora).padStart(2, '0');
  
          const event = {
            title: `Reserva ${item.reserva_id}`,
            date: `${year}-${month}-${day}T${hour}:00`,
          };
          this.events.push(event);
        }
      });
  
      // Update the calendar options with the updated events array
      this.calendarOptions = { ...this.calendarOptions, ...{ events: this.events } };
    });
  }
  
  
  formatDate(date: string): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }

  show(dat: any, low: any) {
    console.log(low);
    this.ref = this.dialogService.open(ReservaEditarComponent, {
      header: 'Reserva Editar',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto", "min-height": "500px"},
      baseZIndex: 10000,
      data: {
        pessoas: dat,
        ids: low,
        selectedResc: this.selectedResc
      }
    });

    this.ref.onClose.subscribe(() => {
      this.changeLoc(); 
    });

  }
}
  
  
  
  
  



