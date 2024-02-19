import { Component, OnInit } from '@angular/core';
import { PensamentoDTO } from '../model/pensamento.dto';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaDePensamentos: Array<PensamentoDTO> = []  

  constructor() { }

  ngOnInit(): void {
  }

}
