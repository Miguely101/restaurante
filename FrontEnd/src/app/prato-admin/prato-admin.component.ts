import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';

@Component({
  selector: 'app-prato-admin',
  templateUrl: './prato-admin.component.html',
  styleUrls: ['./prato-admin.component.scss']
})
export class PratoAdminComponent implements OnInit {

  tipos!: any[]
  constructor(private service:ApIServiceService) { }

  ngOnInit(): void {
    this.service.getAllPratosTipos().subscribe((response) => {
      this.tipos = response.map((item) => {
        return {
          label: item.pratoTipo_nome,
          value: item.pratoTipo_id,
        };
      });
    });
  }
  onBasicUpload(event: any): void {
    const file = event.files[0];
    const formData = new FormData();
    formData.append('file', file);
    console.log(file)
  }
}
