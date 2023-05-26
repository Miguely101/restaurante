import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {

  constructor(private service:ApIServiceService) { }
  products:any[] = []
  ngOnInit(): void {

    this.service.getAllPratos().subscribe((response) => {
      this.products =(response);
      console.log(response)
     })
  
  }
  
}
