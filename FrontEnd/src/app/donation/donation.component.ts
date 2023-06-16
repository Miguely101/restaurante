import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss'],
  providers:[MessageService]
})
export class DonationComponent implements OnInit {
  user: any[] = []
  constructor(private router: Router ,private service:ApIServiceService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.service.getDonate().subscribe((response) => {
      this.user = response
      console.log(this.user)
    })
  }

  doar(){
    this.messageService.add({severity:'success', summary: 'Doação feita!', detail: "Obrigado por doar 1€"});
    this.service.donate().subscribe((response) => {
      console.log(response)
      this.user = []
      this.service.getDonate().subscribe((response) => {
        this.user = response
        console.log(this.user)
      })
     })
  }
}
