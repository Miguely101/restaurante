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
  valor:any;

  async ngOnInit(): Promise<void> {
    this.service.getAllEncomendasItems(this.config.data.ids).subscribe(async (response: any) => {
      this.list1 = await response;
      this.valor = await response[0].estado_id;
  
      if (this.valor == 5 || this.valor == 6) {
        this.valor = 8;
      }
  
      console.log(this.valor); // Move the console.log here
    });
  }
  

  plus(x:any){

    if(!x){
      this.valor = 6;
    }
    if(this.valor == 5){
      this.valor = 8;
    }

    this.valor++;
    
    this.service.setEstadoEncomenda(this.config.data.ids,this.valor).subscribe((response)=>{
      console.log(response)
    })

    if(this.valor == 5){
      this.valor = 8;
    }


    if(!x){
      this.valor = 8;
    }

  }
}
