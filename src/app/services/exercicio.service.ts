import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exercicio } from '../models/exercicio';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ExercicioService {

  constructor(private http: HttpClient) { }

  findAll(id: string): Observable<Exercicio[]>{
    return this.http.get<Exercicio[]>(`${API_CONFIG.baseUrl}/treinoExercicio/treino/${id}`);
  }
}
