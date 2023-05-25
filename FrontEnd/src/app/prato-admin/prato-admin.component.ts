import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';
import { FileUpload } from 'primeng/fileupload';
import { Observable, Subscriber } from 'rxjs';
import { DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-prato-admin',
  templateUrl: './prato-admin.component.html',
  styleUrls: ['./prato-admin.component.scss'],

})
export class PratoAdminComponent implements OnInit {

  tipos!: any[]
  valor!:any;
  prato!:any;
  prato_nomes!:any;
  tipoSelected!:any;
  constructor(private service:ApIServiceService,public ref: DynamicDialogRef) { }

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

  async onBasicUpload(event: any) {
    const file = event.files[0];
    await this.convertToBase64(file)

  }
  
  async convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    
    await observable.subscribe((d) => {
      this.prato = {prato_nome: this.prato_nomes,prato_preco: this.valor,pratoTipo_id:this.tipoSelected , prato_imagem:d}  
      this.service.makePrato(this.prato).subscribe((response) => {
        console.log(response)
        this.ref.close(true);
      });

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
