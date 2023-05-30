import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  constructor(public config: DynamicDialogConfig, public ref: DynamicDialogRef) { }
  list1:any[] =  [];
  valor:any = 0;
  ngOnInit(): void {
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
}
