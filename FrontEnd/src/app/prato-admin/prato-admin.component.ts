import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';
import { FileUpload } from 'primeng/fileupload';


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
  onBasicUpload(event: any) {
    console.log(event.files[0].)
  }
  convertBinaryStringToVarbinary(binaryString: string): Uint8Array {
    const length = binaryString.length;
    const bytes = new Uint8Array(length);
  
    for (let i = 0; i < length; i++) {
      bytes[i] = binaryString.charCodeAt(i) & 0xff;
    }
  
    return bytes;
  }
}
