import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { ApIServiceService } from '../api-service.service';
import { DatePipe } from '@angular/common';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ReservaEditarComponent } from '../reserva-editar/reserva-editar.component';

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
                editable: true,
                selectable:true,
                selectMirror: true,
                dayMaxEvents: true,
  };

  reservas!:[];
  restaurantes!: any[];
  selectedResc:any = 1;
  number = 1;
  ref!: DynamicDialogRef;
 
  constructor(private service:ApIServiceService ,private datePipe: DatePipe,public dialogService: DialogService) { }


  ngOnInit(): void {
     
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

    this.service.getReservasById(this.number).subscribe((response) => {
      this.reservas = response;
      console.log(response)
     })
  }

  changeLoc(){
    this.service.getReservasById(this.selectedResc).subscribe((response) => {
      this.reservas = response;
      console.log(response)
     })
  }
  
  formatDate(date: string): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }
  show(dat:any,low:any) {
    this.ref = this.dialogService.open(ReservaEditarComponent, {
        header: 'Reserva Editar',
        width: '70%',
        contentStyle: {"max-height": "500px", "overflow": "auto","min-height": "500px"},
        baseZIndex: 10000,
        data: {
          pessoas: dat,
          ids: low,
          selectedResc: this.selectedResc
        }
    });
}

  
}
