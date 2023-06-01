import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-encomendas-items',
  templateUrl: './encomendas-items.component.html',
  styleUrls: ['./encomendas-items.component.scss']
})
export class EncomendasItemsComponent implements OnInit {

  constructor(private service:ApIServiceService, public ref: DynamicDialogRef,public config: DynamicDialogConfig) { }
  list1:any[] = [];
  valor:any = 1
  ngOnInit(): void {
    this.service.getAllEncomendasItems(this.config.data.ids).subscribe((response:any) => {
      this.list1 = response
      this.valor = response[0].estado_id
    }) 
  }
  plus(){
    this.valor++
  }
}
