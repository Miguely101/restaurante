import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';

@Component({
  selector: 'app-menus-admin',
  templateUrl: './menus-admin.component.html',
  styleUrls: ['./menus-admin.component.scss']
})
export class MenusAdminComponent implements OnInit {
    list1!: any[];
    list2!: any[];
    selecteds!: any;

  constructor(private service:ApIServiceService) { }

  ngOnInit(): void {
    this.service.getAllPratos().subscribe((response) => {
      this.list1 = this.list1 =(response);
      console.log(response)
     })
  }

}
