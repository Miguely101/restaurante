import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ApIServiceService } from '../api-service.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  constructor(private service:ApIServiceService,public config: DynamicDialogConfig, public ref: DynamicDialogRef) { }
  list1:any[] =  [];
  valor:any = 0;
  selectedResc:any = 1;
  restaurantes:any;
  ngOnInit(): void {
    this.valor = this.config.data.valor2
    this.list1 = this.config.data.items
  }

  startChange(x:any){
    this.valor = x.prato_quant
  }
  saveChange(x:any){
   x.prato_quant = this.valor
  }
  deletes(x:any){
    const index = this.list1.indexOf(x); 
    if (index > -1) {
      this.list1.splice(index, 1); 
    }
  }
  send(){
    let encomenda = {valorTotal: this.valor,pratos:this.list1,restaurante_id: this.selectedResc}
    this.service.Encomenda(encomenda).subscribe((response) => {
      console.log(response);
     })
  }
}
