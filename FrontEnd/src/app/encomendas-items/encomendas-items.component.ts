import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SocketIoService } from '../socket-io.service';

@Component({
  selector: 'app-encomendas-items',
  templateUrl: './encomendas-items.component.html',
  styleUrls: ['./encomendas-items.component.scss']
})
export class EncomendasItemsComponent implements OnInit {

  constructor(private socketService: SocketIoService, private service: ApIServiceService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }
  list1: any[] = [];
  valor: any;

  async ngOnInit(): Promise<void> {
    this.service.getAllEncomendasItems(this.config.data.ids).subscribe(async (response: any) => {
      this.list1 = await response;
      this.valor = await response[0].estado_id;

      if (this.valor == 5 || this.valor == 6) {
        this.valor = 8;
      }
    });
  }


  plus(x: any) {



    if (this.valor == 5) {
      this.socketService.emitToServer("encomendafinal", "cancelar");
      this.valor = 8;
    }

    this.valor++;

    if (!x) {
      this.valor = 6;
    }

    this.service.setEstadoEncomenda(this.config.data.ids, this.valor).subscribe((response) => {
      console.log(this.valor)
      switch (this.valor) {
        case 2:
          this.socketService.emitToServer("encomenda", "aceite");
          console.log(response)
          break;
        case 3:
          this.socketService.emitToServer("encomenda", "preparar");
          console.log(response)
          break;
        case 4:
          this.socketService.emitToServer("encomenda", "acaminho");
          console.log(response)
          break;
        case 5:
          this.socketService.emitToServer("encomenda", "entregue");
          console.log(response)
          break;
        case 6:
          this.socketService.emitToServer("encomenda", "cancelar");
          console.log(response)
          break;
      }

    })

    if (this.valor == 5) {
      this.socketService.emitToServer("encomenda", "entregue");
      this.valor = 8;
    }


    if (!x) {
      this.socketService.emitToServer("encomenda", "cancelar");
      this.valor = 8;
    }

  }
}
