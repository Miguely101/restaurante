import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ApIServiceService } from '../api-service.service';
import { PratoAdminComponent } from '../prato-admin/prato-admin.component';

@Component({
  selector: 'app-menus-admin',
  templateUrl: './menus-admin.component.html',
  styleUrls: ['./menus-admin.component.scss'],
  providers:[DialogService]
})
export class MenusAdminComponent implements OnInit {
    list1!: any[];
    list2!: any[];
    selecteds!: any;
    ref!: DynamicDialogRef;

  constructor(private service:ApIServiceService,public dialogService: DialogService,) { }

  ngOnInit(): void {
    this.service.getAllPratos().subscribe((response) => {
      this.list1 = this.list1 =(response);
      console.log(response)
     })
  }
  show() {
    this.ref = this.dialogService.open(PratoAdminComponent, {
        header: 'Prato',
        width: '70%',
        contentStyle: {"max-height": "500px", "overflow": "auto","min-height": "200px"},
        baseZIndex: 10000
    });
}

delete(){
  const pratos = this.selecteds.map((obj: { prato_id: any; }) => obj.prato_id);
  console.log(pratos)
  this.service.deletePratos(pratos).subscribe((response) => {
    console.log(response)
   })
}
}
