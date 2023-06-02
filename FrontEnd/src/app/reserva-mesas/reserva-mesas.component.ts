import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-reserva-mesas',
  templateUrl: './reserva-mesas.component.html',
  styleUrls: ['./reserva-mesas.component.scss']
})
export class ReservaMesasComponent implements OnInit {

  constructor(public config: DynamicDialogConfig) { }
  list1:any[]=[]
  ngOnInit(): void {
    this.list1 = this.config.data.mesas
  }

}
