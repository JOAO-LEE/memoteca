import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { PensamentoDTO } from './model/pensamento.dto';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API = "http://localhost:3000/pensamentos"

  constructor(private http: HttpClient) { }

  getPensamentos(pagina: number, filtro: string, favorito: boolean): Observable<Array<PensamentoDTO>> {

    const itensPorPagina = 6;
    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itensPorPagina);

      if (filtro.trim().length > 2) {
        params = params.set('q', filtro);
      }

      if (favorito) {
        params = params.set('favorito', favorito);
      }

    return this.http.get<Array<PensamentoDTO>>(this.API, { params });
  }

  createPensamentos(pensamento: PensamentoDTO): Observable<PensamentoDTO> {
    return this.http.post<PensamentoDTO>(this.API, pensamento);
  }

  editar(pensamento: PensamentoDTO): Observable<PensamentoDTO> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<PensamentoDTO>(url, pensamento)
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
