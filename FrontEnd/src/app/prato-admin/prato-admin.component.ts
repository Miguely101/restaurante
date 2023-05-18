import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';
import { FileUpload } from 'primeng/fileupload';
import { Observable, Subscriber } from 'rxjs';


@Component({
  selector: 'app-prato-admin',
  templateUrl: './prato-admin.component.html',
  styleUrls: ['./prato-admin.component.scss']
})
export class PratoAdminComponent implements OnInit {

  tipos!: any[]
  myimage: any;
  base64code: any;
  valor!:any;

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
    const file = event.files[0];
    console.log(file.name);
    this.convertToBase64(file)
  }
  
  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      console.log(d)
      this.myimage = d
      this.base64code = d
    })

  }
  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
 
}
