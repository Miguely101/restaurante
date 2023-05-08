import { Component, Inject, OnInit } from '@angular/core';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import { ApIServiceService } from '../api-service.service';

@Component({
  selector: 'app-reserva-editar',
  templateUrl: './reserva-editar.component.html',
  styleUrls: ['./reserva-editar.component.scss']
})
export class ReservaEditarComponent implements OnInit {
  selectedResc!: any;
  list1:any[] = []
  list2:any[] = []
  constructor( private service:ApIServiceService ,public ref: DynamicDialogRef, public config: DynamicDialogConfig,) { }

  ngOnInit(): void {
    this.service.getReservasById(this.selectedResc).subscribe((response) => {
      this.list1 = response;
      console.log(response)
     })
     
  }

}
