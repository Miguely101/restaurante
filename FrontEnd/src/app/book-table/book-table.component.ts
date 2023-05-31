import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
/// <reference types="@types/googlemaps" />

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {

  constructor(private service: ApIServiceService,public config: DynamicDialogConfig,public ref: DynamicDialogRef) { }
   overlays!:any;
   options!: any;
   horas:any[]= [];
   selectedHora!:any;
   restaurantes!: any[];
   selectedResc!:any;
   selectedData!:any;
   selectedPessoas!:any;
   map!: google.maps.Map;

  ngOnInit(): void {
    this.horas = [{label: '8:00', value: '8'},{label: '9:00', value: '9'},{label: '10:00', value: '10'},{label: '11:00', value: '11'},{label: '12:00', value: '12'},{label: '13:00', value: '13'},{label: '14:00', value: '14'},{label: '15:00', value: '15'},{label: '16:00', value: '16'},{label: '17:00', value: '17'},{label: '18:00', value: '18'},{label: '19:00', value: '19'},{label: '20:00', value: '20'},{label: '21:00', value: '21'},{label: '22:00', value: '22'}]

    this.options = {
      center: {lat: 38.736946, lng: 	-9.142685},
      zoom: 8
    };
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

    this.overlays = [
      new google.maps.Marker({position: {lat:38.7085963977661 , lng: -9.153820984758827}, title:"Menu do Chefe"}),
      new google.maps.Marker({position: {lat:41.153510603855295, lng:  -8.604649460979212}, title:"Menu do Chefe"}),
      new google.maps.Marker({position: {lat: 37.019446674318445 , lng: -7.931894421865654}, title:"Menu do Chefe"}),
      new google.maps.Marker({position: {lat:40.224984987782506, lng:  -8.399729442265079}, title:"Menu do Chefe"}),
      new google.maps.Marker({position: {lat: 38.710794603260105 , lng: -9.137678107111583}, title:"Menu do Chefe"})
  ];

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

  changeLoc(map:any){
    const index = this.restaurantes.findIndex(p => p.value == this.selectedResc);
    const lng = parseFloat(this.restaurantes[index].latitude); // convert to float
    const lat = parseFloat(this.restaurantes[index].longitude); // convert to float
    this.options.center = {lat: parseInt(lat.toString(), 10), lng: parseInt(lng.toString(), 10)}; // convert to integer and assign to map.center
    const newCenter = {lat: lat, lng: lng};
    map.setCenter(newCenter);
    map.setZoom(20)
  }

  makeReserva(){
    const index = this.restaurantes.findIndex(p => p.value == this.selectedResc);
    console.log(this.selectedData)
    const selectedDate = new Date(this.selectedData);
    selectedDate.setDate(selectedDate.getDate() + 1); // Add one day

    const body = {
      restaurante_id: this.selectedResc,
      reserva_data: selectedDate,
      reserva_hora: this.selectedHora,
      reserva_pessoas: this.selectedPessoas
    }
    
    this.service.makeReserva(body).subscribe((response) => {
      console.log(response);
    })

    this.ref.close();
  }
}


