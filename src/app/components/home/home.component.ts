import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Treino } from '../../models/treino';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatCheckboxModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  treinos: Treino[] =[
    {
      id: 1,
      nomeTreino: 'Peito/Triceps',
      treinoAtual: true
    },
    {
      id: 2,
      nomeTreino: 'Biceps/Costas',
      treinoAtual: false
    }
  ]

}



