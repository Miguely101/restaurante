import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-apagar-confirmar',
  templateUrl: './apagar-confirmar.component.html',
  styleUrls: ['./apagar-confirmar.component.scss']
})
export class ApagarConfirmarComponent implements OnInit {

  constructor(public ref: DynamicDialogRef) { }

  ngOnInit(): void {
  }
  apagar(){
    this.ref.close(true);
  }
  cancelar(){
    this.ref.close(false);
  }
}
