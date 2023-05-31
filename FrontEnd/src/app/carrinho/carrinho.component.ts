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
  valorTotal:any = 0;
  selectedResc:any = 1;
  restaurantes:any;
  ngOnInit(): void {
    this.valorTotal = this.config.data.valor2
    this.list1 = this.config.data.items

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

  startChange(x:any){
    this.valor = x.prato_quant
    this.conta()
  }
  saveChange(x:any){
   x.prato_quant = this.valor
   this.conta()
  }
  deletes(x:any){
    const index = this.list1.indexOf(x); 
    if (index > -1) {
      this.list1.splice(index, 1); 
    }
    this.conta()
  }
  send(){
    let pratosWithoutImages = this.list1.map((prato: any) => {
      let { prato_imagem, ...pratoWithoutImage } = prato;
      return pratoWithoutImage;
    });

    let encomenda = {restaurante_id: this.selectedResc, valorTotal: this.valorTotal,pratos: pratosWithoutImages}
    this.service.Encomenda(encomenda).subscribe((response) => {
      console.log(response);
     })
     this.ref.close(true);
  }

  conta(){
    this.valorTotal =  0
    this.list1.forEach((item) => {
      const itemPrice = item.prato_preco * item.prato_quant;
      this.valorTotal += itemPrice;
    });
  }
}
