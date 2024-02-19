import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { PensamentoDTO } from './model/pensamento.dto';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API = "http://localhost:3000/pensamentos"

  constructor(private http: HttpClient) { }

  getPensamentos(): Observable<Array<PensamentoDTO>> {
    return this.http.get<Array<PensamentoDTO>>(this.API);
  }

  createPensamentos(pensamento: PensamentoDTO): Observable<PensamentoDTO> {
    return this.http.post<PensamentoDTO>(this.API, pensamento);
  }

  excluir(id: number): Observable<PensamentoDTO> {
    const url = `${this.API}/${id}`;
    return this.http.delete<PensamentoDTO>(url)
  }

  buscaPensamentoPorId(id: number): Observable<PensamentoDTO> {
    const url = `${this.API}/${id}`;
    return this.http.get<PensamentoDTO>(url);
  }
  
}
