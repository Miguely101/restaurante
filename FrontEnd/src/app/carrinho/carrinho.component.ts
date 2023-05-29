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
  ngOnInit(): void {
    this.list1 = this.config.data.items
  }

}
