import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {

  constructor() { }
   overlays!:any;
   options!: any;
   value!:any;
   horas:any[]= [];
   selectedHora!:any;

  ngOnInit(): void {
    this.horas = [{label: '8:00', value: '8'},{label: '9:00', value: '9'},{label: '10:00', value: '10'},{label: '11:00', value: '11'},{label: '12:00', value: '12'},{label: '13:00', value: '13'},{label: '14:00', value: '14'},{label: '15:00', value: '15'},{label: '16:00', value: '16'},{label: '17:00', value: '17'},{label: '18:00', value: '18'},{label: '19:00', value: '19'},{label: '20:00', value: '20'},{label: '21:00', value: '21'},{label: '22:00', value: '22'}]
      
    this.options = {
      center: {lat: 38.736946, lng: 	-9.142685},
      zoom: 10
    };
  }
}


