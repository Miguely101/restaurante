import { Component, OnInit } from '@angular/core';
import { ApIServiceService } from '../api-service.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private service:ApIServiceService, private router: Router) { }

  nome = ''
  email = ''
  numero = 0

  senha = ''
  confiramSenha = ''

  morada = '';
  telemovel = '';

  erromsg = '';

  ngOnInit(): void {
  }

  register(){
    let user = {nome:this.nome,email:this.email,morada:this.morada, password:this.senha,numero:this.numero.toString()}

    if(this.nome.length > 20 || this.nome.length <= 0){
      this.erromsg = "Nome tem que ser entre 1 ou 20"
      return
    }

    if(this.email.includes('@')){
    }else{
      this.erromsg = "O Email tem que ter @"
      return
    }

    if(this.morada.length <= 0){
      this.erromsg = "Morada Obrigatório"
      return
    }

    if(this.numero.toString().length != 9){
      this.erromsg = "Telemovel tem que ser 9 numeros"
      return
    }

    if(this.senha.length > 25 || this.senha.length <= 7){
      this.erromsg = "password tem que ser entre 8 ou 25"
      return
    }

  
    if(this.senha != this.confiramSenha){
      this.erromsg = 'passwords não concidem.'
      return
    }

   
   this.service.userRegister(user).subscribe((response) => {
     if(response.code == 200){
      alert('Registado com sucesso.');
      this.router.navigate(['/login']);
      }else{
        this.erromsg = response.message
      }
    })

  }

}
