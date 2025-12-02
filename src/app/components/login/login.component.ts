import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Credenciais } from '../../models/credencias';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router
  ){

  }

  creds: Credenciais ={
    login: '',
    senha: ''
  }

  // FormGroup com dois controles
  form = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  validaCampos() {
    if (this.form.invalid) {
      return false;
    }
    return true;
  }

  // handler do submit
  logar() {
    this.creds = {
      login: this.form.get('login')?.value ?? '',
      senha: this.form.get('senha')?.value ?? ''
    };

    this.service.authenticate(this.creds).subscribe({
      next: (res: any) => {
        this.service.successsfulLogin(res.body.token);
        this.router.navigate(['']);
      },
      error: (err) => {
        switch (err.status) {
          case 400:
            this.toast.error('Requisição inválida (400)');
            break;
          case 401:
            this.toast.error('Usuário ou senha incorretos (401)');
            break;
          case 403:
            this.toast.error('Acesso negado (403)');
            break;
          case 404:
            this.toast.error('Endpoint não encontrado (404)');
            break;
          case 500:
            this.toast.error('Erro interno no servidor (500)');
            break;
          default:
            this.toast.error('Erro inesperado: ' + err.status);
            break;
        }
      }
    });


  }

}
