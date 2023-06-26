import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-menu-items-cliente',
  templateUrl: './menu-items-cliente.component.html',
  styleUrls: ['./menu-items-cliente.component.scss']
})
export class MenuItemsClienteComponent implements OnInit {

  list2:any[] = []
  constructor(private service:ApIServiceService,public config: DynamicDialogConfig, public ref: DynamicDialogRef) { }

  ngOnInit(): void {
    this.service.getAllMenusItems(this.config.data.ids).subscribe((response) => {
      this.list2 = response;
      console.log(this.list2)
     })
  }

}
