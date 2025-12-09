import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Treino } from '../../models/treino';
import { CommonModule } from '@angular/common';
import { TreinoService } from '../../services/treino.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatCheckboxModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  treinos: Treino[] = [];
  treinoAtual?: Treino;

  constructor(private treinoService: TreinoService){}

  ngOnInit(): void{
    this.findAll();
  }

  findAll(){
    this.treinoService.findAll().subscribe(resposta => {
      this.treinos = resposta;
      console.log(resposta);
      // pega o treino atual (objeto)
      this.treinoAtual = this.treinos.find(t => t.atual);

      // remove o atual da lista
      this.treinos = this.treinos.filter(t => !t.atual);

      console.log("Atual:", this.treinoAtual);
      console.log("Treinos restantes:", this.treinos);
    })
  }

  proximoTreino() {
    this.treinoService.proximoTreino().subscribe(resposta => {
      console.log(resposta);
    })
  }

}



