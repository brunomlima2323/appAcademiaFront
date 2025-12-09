import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { Router, RouterLink } from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatSidenavModule,
    NgIf,
    MatButtonModule,
    MatListModule,
    RouterLink,
    MatIconModule,
    RouterOutlet
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: ToastrService
  ){
    this.router.navigate(['home']);
  }


  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
    this.toast.info('Logout realizado com sucesso!','Logout');
  }

}
