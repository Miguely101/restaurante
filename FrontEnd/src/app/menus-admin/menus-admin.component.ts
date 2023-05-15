import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus-admin',
  templateUrl: './menus-admin.component.html',
  styleUrls: ['./menus-admin.component.scss']
})
export class MenusAdminComponent implements OnInit {
    list1!: any[];
    list2!: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
