import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';

@Component({
  selector: 'app-meun-items',
  templateUrl: './meun-items.component.html',
  styleUrls: ['./meun-items.component.scss']
})
export class MeunItemsComponent implements OnInit {

  list1!:any[]
  list2!:any[]
  constructor(private service:ApIServiceService) { }

  ngOnInit(): void {
    this.load()
  }
  load(){
    this.list1= [];
    this.service.getAllPratos().subscribe((response) => {
      this.list1 = this.list1 =(response);
      console.log(response)
     })
  
  }
}
