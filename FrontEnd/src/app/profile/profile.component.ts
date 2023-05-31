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
  infos:any[] =[]

  ngOnInit(): void {
    this.service.getUserData().subscribe((response) => {
      this.infoUser = response;
      console.log(this.infoUser)
    })

    this.service.getInfos().subscribe((response) => {
      console.log(response)
      this.infos = response;
    })
  }

}
