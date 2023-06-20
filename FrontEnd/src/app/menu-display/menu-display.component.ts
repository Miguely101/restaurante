import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';

@Component({
  selector: 'app-menu-display',
  templateUrl: './menu-display.component.html',
  styleUrls: ['./menu-display.component.scss']
})
export class MenuDisplayComponent implements OnInit {

  constructor(private service:ApIServiceService) { }
  menus!: any[];
  ngOnInit(): void {
    this.service.getAllMenus().subscribe((response) => {
      this.menus =(response);
      console.log(response)
     })
  }

}
