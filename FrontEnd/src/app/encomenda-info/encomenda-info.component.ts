import { Component, OnInit } from '@angular/core';
import { SocketIoService } from '../socket-io.service';
import { ApIServiceService } from '../api-service.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-encomenda-info',
  templateUrl: './encomenda-info.component.html',
  styleUrls: ['./encomenda-info.component.scss']
})
export class EncomendaInfoComponent implements OnInit {

  constructor(private service: ApIServiceService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }
  list1: any[] = [];
  valor: any;

  async ngOnInit(): Promise<void> {
    this.service.getAllEncomendasItems(this.config.data.ids).subscribe(async (response: any) => {
      this.list1 = await response;

    });
  }

}
