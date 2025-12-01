import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Credenciais } from '../../models/credencias';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private toast: ToastrService){

  }

  creds: Credenciais ={
    email: '',
    senha: ''
  }

  // FormGroup com dois controles
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
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
    // if (this.form.invalid) {
    //   // marca todos como tocados para mostrar mensagens
    //   this.form.markAllAsTouched();
    //   return;
    // }

    this.creds = {
      email: this.form.get('email')?.value ?? '',
      senha: this.form.get('senha')?.value ?? ''
    };

    console.log(this.creds);
    // aqui você chama seu serviço de login

    this.toast.error('Usuário e/ou senha inválido', 'Erro no login');
  }

}
