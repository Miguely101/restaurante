import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {
  user: any[] = []
  constructor(private service:ApIServiceService) { }

  ngOnInit(): void {
    this.service.getDonate().subscribe((response) => {
      this.user = response
      console.log(this.user)
    })
  }

}
