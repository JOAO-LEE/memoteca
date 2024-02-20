import { Component, Input, OnInit } from '@angular/core';
import { PensamentoDTO } from '../model/pensamento.dto';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaDePensamentos: Array<PensamentoDTO> = []
  pagina: number = 1; 
  haMaisPensamentos: boolean = true; 
  filtro: string = '';

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit(): void {
    this.pensamentoService.getPensamentos(this.pagina, this.filtro).subscribe(pensamentos => {
      this.listaDePensamentos = pensamentos;
    });
  }

  carregarMaisPensamentos(): void {
    this.pensamentoService.getPensamentos(++this.pagina, this.filtro).subscribe(pensamentosBuscados => {
      this.listaDePensamentos.push(...pensamentosBuscados)
      if (!pensamentosBuscados.length) {
        this.haMaisPensamentos = false;
      }
    });
  }

  buscarPensamentos(): void {
    this.haMaisPensamentos = true;
    this.pagina = 1;
    this.pensamentoService.getPensamentos(this.pagina, this.filtro).subscribe(pensamentosBuscados => {
      this.listaDePensamentos = pensamentosBuscados;
    });
  }

}
