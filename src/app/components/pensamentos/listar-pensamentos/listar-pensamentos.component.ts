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

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit(): void {
    this.pensamentoService.getPensamentos(this.pagina).subscribe(pensamentos => {
      this.listaDePensamentos = pensamentos;
    });
  }

  carregarMaisPensamentos(): void {
    this.pensamentoService.getPensamentos(++this.pagina).subscribe(pensamentosBuscados => {
      this.listaDePensamentos.push(...pensamentosBuscados)
      if(!pensamentosBuscados.length) {
        this.haMaisPensamentos = false;
      }
    });
  }

}
