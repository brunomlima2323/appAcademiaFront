import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { Router, RouterLink } from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

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

  constructor(private router: Router){
    this.router.navigate(['home']);
  }

}
