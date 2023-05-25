import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-meun-items',
  templateUrl: './meun-items.component.html',
  styleUrls: ['./meun-items.component.scss']
})
export class MeunItemsComponent implements OnInit {

  list1:any[] = []
  list2:any[] = []
  constructor(private service:ApIServiceService,public config: DynamicDialogConfig, public ref: DynamicDialogRef) { }

  ngOnInit(): void {
    this.load()
  }

  load(){
    this.list1= [];
    this.list2= [];
    this.service.getAllMenusItems(this.config.data.ids).subscribe((response) => {
      this.list2 = response;
      console.log(this.list2)
     })

     this.service.getAllPratos().subscribe((response) => {
      this.list1 = response.filter((element) => this.list2.every((item) => item.prato_id !== element.prato_id));
      console.log(this.list1);
    });
    
    
  }

  
}
