import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { Treino } from '../models/treino';

@Injectable({
  providedIn: 'root'
})
export class TreinoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Treino[]>{
    return this.http.get<Treino[]>(`${API_CONFIG.baseUrl}/treinos`);
  }

  proximoTreino(){
    return this.http.post(`${API_CONFIG.baseUrl}/treinos/proximoTreino`,null);
  }
}
