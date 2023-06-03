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
  valor:any = 2
  valorBtn:any = 0;

  ngOnInit(): void {
    this.service.getAllEncomendasItems(this.config.data.ids).subscribe((response:any) => {
      this.list1 = response
      this.valor = response[0].estado_id
      if(response[0].estado_id == 1){this.valor++}
      this.valorBtn = this.valor + 1
      console.log(this.valorBtn)
    }) 
  }

  plus(x:any){
    if(!x){
      this.valor = 6
    }
    this.service.setEstadoEncomenda(this.config.data.ids,this.valor).subscribe((response)=>{
    })
    this.valor++
    this.valorBtn = this.valor +1
  }
}
