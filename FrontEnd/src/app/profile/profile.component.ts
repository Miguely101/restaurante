import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  constructor(private service:ApIServiceService) { }
  infoUser:any = {};
  cards: string[] = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6', 'Card 7', 'Card 8', 'Card 9', 'Card 10'];
  ngOnInit(): void {
    this.service.getUserData().subscribe((response) => {
      this.infoUser = response;
      console.log(this.infoUser)
    })
  }

}
