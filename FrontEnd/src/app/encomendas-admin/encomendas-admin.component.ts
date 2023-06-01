import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EncomendasItemsComponent } from '../encomendas-items/encomendas-items.component';

@Component({
  selector: 'app-encomendas-admin',
  templateUrl: './encomendas-admin.component.html',
  styleUrls: ['./encomendas-admin.component.scss'],
  providers: [DialogService]
})
export class EncomendasAdminComponent implements OnInit {

  constructor(private service:ApIServiceService,public dialogService: DialogService) { }
  list1:any[]= []
  selecteds:any[]=[]
  restaurantes:any;
  selectedResc:any = 1;
  ref!: DynamicDialogRef;

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
    console.log(this.list1)
     }) 
  }


    show(id:any) {
      this.ref = this.dialogService.open(EncomendasItemsComponent, {
          header: 'Itens Encomendas',
          width: '55%',
          contentStyle: {"max-height": "500px", "overflow": "auto","min-height": "200px"},
          baseZIndex: 10000,
          data: {
            ids: id,
          }
      });
  
      this.ref.onClose.subscribe((data:any) => {
      });
  }
}
