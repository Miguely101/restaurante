import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';

@Component({
  selector: 'app-encomendas-admin',
  templateUrl: './encomendas-admin.component.html',
  styleUrls: ['./encomendas-admin.component.scss']
})
export class EncomendasAdminComponent implements OnInit {

  constructor(private service:ApIServiceService) { }
  list1:any[]= []
  selecteds:any[]=[]
  restaurantes:any;
  selectedResc:any = 1;
  ngOnInit(): void {

    this.changeLoc()
  }
  changeLoc(){
    
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
    this.service.getAllEncomendasById(this.selectedResc).subscribe((response) => {
    this.list1 = response
     }) 
  }
}
