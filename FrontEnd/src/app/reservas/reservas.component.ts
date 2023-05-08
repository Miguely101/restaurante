import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { ApIServiceService } from '../api-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  providers: [DatePipe],
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
  constructor(private service:ApIServiceService ,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.service.getReservas().subscribe((response) => {
      this.reservas = response;
      console.log(response)
     })
  }
  formatDate(date: string): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }
}
