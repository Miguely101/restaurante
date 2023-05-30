import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';
import { Table } from 'primeng/table'
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CarrinhoComponent } from '../carrinho/carrinho.component';

interface ListItem {
  prato_id: any,
  prato_nome: any,
  prato_preco:any,
  prato_quant:number,
}

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss'],
  providers:[DialogService]
})
export class ComprarComponent implements OnInit {

  constructor(private service:ApIServiceService,public dialogService: DialogService) { }
  products:any[] = []
  list1:ListItem[] = []
  ref!: DynamicDialogRef;
  precoTotal:any = 0;
  loading:any;
  ngOnInit(): void {
    this.load()    
  }

  load(){
    this.service.getAllPratos().subscribe((response) => {
      this.products =(response);
     })
     this.loading = false;
  }

  addItem(item:any){
    const existingItem = this.list1.find((existing) => existing.prato_id === item.prato_id);

    if (existingItem) {
      existingItem.prato_quant += 1;
    } else {
      item.prato_quant = 1
      this.list1.push(item);
    }

    this.conta()
  }

  show(){
    this.ref = this.dialogService.open(CarrinhoComponent, {
      header: 'Carrinho',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto","min-height": "200px"},
      baseZIndex: 10000,
      data: {
        items: this.list1,
      }
      
  });
  this.ref.onClose.subscribe((data) => {
    this.conta();
  })
  }

  conta(){
    this.precoTotal =  0
    this.list1.forEach((item) => {
      const itemPrice = item.prato_preco * item.prato_quant;
      this.precoTotal += itemPrice;
    });
  }

 
}
