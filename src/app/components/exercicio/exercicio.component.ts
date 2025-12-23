import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExercicioService } from '../../services/exercicio.service';
import { Exercicio } from '../../models/exercicio';
import { NgFor } from '@angular/common';
import { MatCard, MatCardHeader, MatCardTitle, MatCardActions } from "@angular/material/card";
import { TreinoService } from '../../services/treino.service';

@Component({
  selector: 'app-exercicio',
  standalone: true,
  imports: [NgFor, MatCard, MatCardHeader, MatCardTitle, MatCardActions],
  templateUrl: './exercicio.component.html',
  styleUrl: './exercicio.component.css'
})
export class ExercicioComponent {
  id?: string | null;
  exercicios: Exercicio[] = [];            // Lista de exercícios pendentes
  exerciciosFinalizados: Exercicio[] = []; // Lista de exercicios concluídos
  nomeTreino?: string | null;

  constructor(
    private route: ActivatedRoute,
    private exercicioService: ExercicioService,
    private treinoService: TreinoService,
    private router: Router
  ){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');

      if(this.id){
        this.exercicioService.findAll(this.id).subscribe(r =>{
          this.exercicios = r;
          console.log(this.exercicios);
          this.nomeTreino = this.exercicios[0].nomeTreino;
        });
      }
    });
  }

  finalizarExercicio(id: number){
    const exercicio = this.exercicios.find(e => e.exercicio_id === id);
    if(exercicio){
      // Adiciona na lista de finalizados
      this.exerciciosFinalizados.push(exercicio);

      // Remove da lista principal
      this.exercicios = this.exercicios.filter(e => e.exercicio_id !== id);
    }
    console.log(this.exercicios);
  }

  demarcarExercicio(id: number){
    const exercicio = this.exerciciosFinalizados.find(e => e.exercicio_id === id);

    if(exercicio){
      // Volta para a lista de pendentes
      this.exercicios.push(exercicio);

      // Remove da lista de finalizados
      this.exerciciosFinalizados = this.exerciciosFinalizados.filter(e => e.exercicio_id !== id);
    }
  }

  proximoTreino() {
    this.treinoService.proximoTreino().subscribe(resposta => {
      console.log(resposta);
      this.router.navigate(['home']);
    })
  }

}
